import { getCurrencies } from './api'
import './style.css'

function renderApp() {
  const app = document.querySelector('#app')

  app.innerHTML += `
    <div class="flex flex-col px-4 w-96 border border-white/50 divide-y divide-white/50 rounded-md">
      <header class="py-4 text-center text-red-400">
        <h3 class="text-xl font-semibold">환율 구하기</h3>
      </header>
      <form id="form">
        <div class="flex items-center gap-2 py-4">
          <input type="number" name="input-krw" placeholder="원화 입력" class="p-2 flex-1 bg-transparent border rounded-sm border-white/50 text-right" />
          <button class="bg-sky-500 active:bg-sky-600 hover:bg-sky-400 px-2 py-2 rounded-sm" type="submit">변환(Enter)</button>
        </div>
      </form>
      <div class="flex flex-col gap-2 py-4" id="currencies-list-container">

      </div>
    </div>
  `

  const form = document.querySelector('#form')
  const currenciesListContainer = document.querySelector('#currencies-list-container')
  const krw = form.querySelector('[name="krw"]')

  form.addEventListener('submit', async e => {
    e.preventDefault()

    const { data } = await getCurrencies('KRW', 'USD', 'EUR', 'JPY', 'GBP', 'CNY')
    const KRW = data.KRW

    delete data.KRW

    currenciesListContainer.innerHTML = Object.entries(data).reduce((html, row) => {
      const [symbol, value] = row
      const exchange = (value / KRW) * krw

      return (
        html +
        `<div class="flex">
        <div class="w-20">
          <strong>${symbol}</strong>
        </div>
        <div>
          ${+exchange.toFixed(4)}
        </div>
      </div>`
      )
    }, '')
  })
}

renderApp()
