import './style.css'
import logo from './logo3.svg'
import appstore from './appstore.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a target="_blank">
      <img src="${logo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Train App</h1>
    <p class="read-the-docs">
      We're the first app that enables coaches, athletes, and parents to collaborate and communicate in real-time.
    </p>

    <h3> Coming Soon to the App Store</h3>
    <img src="${appstore}" class="appstore" alt="App Store" />
  </div>
`

