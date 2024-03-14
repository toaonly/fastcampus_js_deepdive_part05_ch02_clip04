import './style.css'

function renderApp() {
  const app = document.querySelector('#app')

  app.innerHTML += `
    <div class="flex flex-col px-4 w-96 border border-white/20 divide-y divide-white/20 rounded-md">
      <div class="py-4">
        <form>
          <input type="number" />
          <button type="submit">변환</button>
        </form>
      </div>
      <div class="py-4">
        [목록]
      </div>
    </div>
  `
}

renderApp()
