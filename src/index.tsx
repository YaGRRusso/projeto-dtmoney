import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Recebimento',
          category: 'Salario',
          type: 'deposit',
          amount: 3000,
          createdAt: new Date('2022-12-05 09:00:00')
        },
        {
          id: 2,
          title: 'Luz',
          category: 'Contas',
          type: 'withdraw',
          amount: 250,
          createdAt: new Date('2022-12-08 10:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const transaction = JSON.parse(request.requestBody)

      return schema.create('transaction', transaction)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);