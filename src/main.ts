import lottie from 'lottie-web';
import './style.css'
import logo from './assets/logo3.svg'
import appstore from './assets/appstore.svg'
import whatsapp from './assets/whatsapp.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import twitter from './assets/twitter.svg'
import tiktok from './assets/tiktok.svg'
import lightanimation from './assets/white-animation.json'
import darkanimation from './assets/success-animation.json'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a target="_blank">
      <img src="${logo}" class="logo" alt=logo" />
    </a>
    <div class="flex-container">
      <h1 class="coming">
        <span class="letter">C</span>
        <span class="letter">o</span>
        <span class="letter">m</span>
        <span class="letter">i</span>
        <span class="letter">n</span>
        <span class="letter">g</span>
      </h1>
      <h1 class="soon">
        <span class="letter">S</span>
        <span class="letter">o</span>
        <span class="letter">o</span>
        <span class="letter">n</span>
      </h1>
    </div>
    <p class="read-the-docs">
      We're the first app that enables coaches, athletes, and parents to collaborate and communicate in real-time.
    </p>

    <img src="${appstore}" class="appstore" alt="App Store" />
    <form id="myForm" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="apikey" value="${import.meta.env.VITE_KEY}">
      <input type="hidden" name="from_name" value="Notify" />
      <input type="hidden" name="subject" value="New User Interested in TrainApp" />
      <div class="input-container">
        <input type="email" name="email" class="text-input" placeholder="Please enter your email address" required/>
        <button id="submit-button" class="submit-button" type="submit">Notify</button>
      </div>
    </form>

    <div id="response"></div>
    <div id="icon-container">
      <a href="https://whatsapp.com/channel/0029VaCgyMxICVft4yrJeD1f" target="_blank">
        <img src="${whatsapp}" alt="WhatsApp" />
      </a>
      <a href="https://www.instagram.com/trainapp" target="_blank">
        <img src="${instagram}" alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/company/thetrainapp/" target="_blank">
        <img src="${linkedin}" alt="LinkedIn" />
      </a>
      <a href="https://twitter.com/thetrainapp" target="_blank">
        <img src="${twitter}" alt="Twitter" />
      </a>
      <a href="https://www.tiktok.com/@trainapp?_t=8laUOe8XabW&_r=1" target="_blank">
        <img src="${tiktok}" alt="TikTok" />
      </a>
    </div>
  </div>
`

window.onload = function() {
  document.getElementById('myForm')!.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;

    // Function to send data to your custom endpoint
    function sendToCustomEndpoint(email: string) {
      fetch(import.meta.env.VITE_API_CUSTOM, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipient: email, name : 'TrainApp'})
      })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
    }

    // Web3Forms API request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', import.meta.env.VITE_API_WEB3FORMS, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        var button = document.getElementById('submit-button')!;
        button.innerHTML = '<div id="animation" style="width: 50px; height: 50px;"></div>';

        var isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var animation = isDarkMode ? darkanimation : lightanimation;

        lottie.loadAnimation({
          container: document.getElementById('animation')!,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          animationData: animation
        });

        var response = document.getElementById('response')!;
        response.innerHTML = 'We\'ll contact you when we\'ve launched!';

        setTimeout(function() {
          button.classList.add('fade-out');
          response.classList.add('fade-out');
          document.querySelector('.text-input')!.classList.add('fade-out');
          document.querySelector('.input-container')!.classList.add('fade-out');
        }, 5000);
      } else {
        document.getElementById('response')!.innerHTML = 'Error: ' + xhr.responseText;
      }
    };
    xhr.send(formData);

    // Also send data to your custom endpoint
    sendToCustomEndpoint(email);
  });
}
