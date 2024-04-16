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
      <img src="${logo}" class="logo" alt="Vite logo" />
    </a>
    <h1 class="coming-soon">Coming Soon</h1>
    <p class="read-the-docs">
      We're the first app that enables coaches, athletes, and parents to collaborate and communicate in real-time.
    </p>

    <img src="${appstore}" class="appstore" alt="App Store" />
    <form id="myForm" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="apikey" value="62980bc9-99df-4b48-b25f-21b3c2d9a94f">
      <div class="input-container">
        <input type="email" name="email" class="text-input" placeholder="Please enter your email address" required/>
        <button id="submit-button" class="submit-button" type="submit">Submit</button>
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

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.web3forms.com/submit', true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        // Replace the button text with the animation
        var button = document.getElementById('submit-button')!;
        button.innerHTML = '<div id="animation" style="width: 50px; height: 50px;"></div>'; // adjust the size as needed

        // Check if the user's system is in dark mode
        var isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Choose the animation based on the mode
        var animation = isDarkMode ? darkanimation : lightanimation;

        // Load and play the animation
        lottie.loadAnimation({
          container: document.getElementById('animation')!, // the DOM element that will contain the animation
          renderer: 'svg',
          loop: false,
          autoplay: true,
          animationData: animation // the animation data
        });

        var response = document.getElementById('response')!;
        response.innerHTML = 'We\'ll contact you when we\'ve launched!';

        // Fade out the animation, response, and text input after 5 seconds
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
    xhr.send(new FormData(event.target as HTMLFormElement)); // event.target is the form
  });
}