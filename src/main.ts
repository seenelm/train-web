import './style.css'
import logo from './logo4.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${logo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Train App</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      We're the first app that enables coaches, athletes, and parents to collaborate and communicate in real-time.
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
