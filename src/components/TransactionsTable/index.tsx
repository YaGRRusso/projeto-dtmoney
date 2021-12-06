import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
  
  useEffect(() => {
    api('transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento Web</td>
            <td className='deposit'>Gasto</td>
            <td>12mi</td>
            <td>20.31</td>
          </tr>
          <tr>
            <td>Desenvolvimento Web</td>
            <td className='withdraw'>Gasto</td>
            <td>12mi</td>
            <td>20.31</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}