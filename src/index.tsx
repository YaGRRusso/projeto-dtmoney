import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transactions: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela',
          category: 'brabo',
          type: 'deposit',
          amount: 400,
          createdAt: new Date('2021-12-12 09:00:00')
        },
        {
          id: 2,
          title: 'alug',
          category: 'brabo',
          type: 'withdraw',
          amount: 400,
          createdAt: new Date('2021-12-12 10:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);