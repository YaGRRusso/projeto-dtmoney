import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary(){
  const {transactions} = useTransactions()

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount
  //   }

  //   return acc
  // }, 0)

  // const totalWithdraw = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'withdraw') {
  //     return acc + transaction.amount
  //   }

  //   return acc
  // }, 0)

  // const total = totalDeposits - totalWithdraw

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  console.log(transactions)

  return (
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>{summary.deposits}</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Entrada" />
        </header>
        <strong>-{summary.withdraws}</strong>
      </div>

      <div className='highlight'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entrada" />
        </header>
        <strong>{summary.total}</strong>
      </div>

    </Container>
  )
}