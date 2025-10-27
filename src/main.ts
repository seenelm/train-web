import lottie from "lottie-web";
import "./style.css";
import logo from "./assets/icons/logo.svg";
import whatsapp from "./assets/icons/whatsapp.svg";
import instagram from "./assets/icons/instagram.svg";
import linkedin from "./assets/icons/linkedin.svg";
import twitter from "./assets/icons/twitter.svg";
import tiktok from "./assets/icons/tiktok.svg";
import successanimation from "./assets/success-animation.json";

const DEMO_URL = "https://train-demo.netlify.app"; // Update this with your actual demo URL

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    <!-- Header -->
    <header class="header">
      <img src="${logo}" class="logo" alt="Train Logo" />
      <div class="social-links">
        <a href="https://whatsapp.com/channel/0029VaCgyMxICVft4yrJeD1f" target="_blank" title="WhatsApp">
          <img src="${whatsapp}" alt="WhatsApp" />
        </a>
        <a href="https://www.instagram.com/trainapp" target="_blank" title="Instagram">
          <img src="${instagram}" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/thetrainapp/" target="_blank" title="LinkedIn">
          <img src="${linkedin}" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/thetrainapp" target="_blank" title="Twitter">
          <img src="${twitter}" alt="Twitter" />
        </a>
        <a href="https://www.tiktok.com/@trainapp?_t=8laUOe8XabW&_r=1" target="_blank" title="TikTok">
          <img src="${tiktok}" alt="TikTok" />
        </a>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <h1 class="hero-title">Transform Your Training Experience</h1>
      <p class="hero-subtitle">
        Train is a program management platform that enables fitness professionals to streamline their client engagements and scale their business.
      </p>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature-card">
        <div class="feature-icon">🏋️</div>
        <h3>Smart Workout Planning</h3>
        <p>Create and assign customized workout programs with drag-and-drop simplicity</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📊</div>
        <h3>Real-Time Progress Tracking</h3>
        <p>Monitor athlete performance with detailed analytics and insights</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💬</div>
        <h3>Seamless Communication</h3>
        <p>Keep coaches, athletes, and parents connected with integrated messaging</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📱</div>
        <h3>Cross-Platform Access</h3>
        <p>Access your training programs anywhere on web and mobile devices</p>
      </div>
    </section>

    <!-- Demo Request Form -->
    <section class="demo-section" id="demo-section">
      <h2 class="section-title">Request a Demo</h2>
      <p class="section-subtitle">Fill out the form below and we'll send you access to our live demo</p>
      
      <form id="demoForm" class="demo-form">
        <div class="form-group">
          <label for="name">What is your name? *</label>
          <input type="text" id="name" name="name" required placeholder="John Doe" />
        </div>

        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="john@example.com" />
        </div>

        <div class="form-group">
          <label for="role">What's your role/experience in fitness? *</label>
          <select id="role" name="role" required>
            <option value="">Select your role</option>
            <option value="trainer">Trainer</option>
            <option value="athlete">Athlete</option>
            <option value="coach">Coach</option>
            <option value="gym-owner">Gym Owner</option>
            <option value="parent">Parent / Guardian</option>
            <option value="nutritionist">Nutritionist</option>
            <option value="fitness-enthusiast">Fitness Enthusiast</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="used-program">Do you currently or have you ever used a fitness or nutrition program? *</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" name="used_program" value="yes" required />
              <span>Yes</span>
            </label>
            <label class="radio-label">
              <input type="radio" name="used_program" value="no" required />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="form-group" id="format-group" style="display: none;">
          <label for="program-format">If yes, what was the format of those programs? *</label>
          <div class="checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" name="program_format" value="pdf" />
              <span>PDF</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="program_format" value="excel" />
              <span>Excel</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="program_format" value="pen-paper" />
              <span>Pen and Paper</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="program_format" value="application" />
              <span>Application</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="program_format" value="other" />
              <span>Other</span>
            </label>
          </div>
        </div>

        <button type="submit" class="submit-btn" id="submit-btn">
          <span id="btn-text">Request Demo Access</span>
          <div id="btn-animation" style="display: none;"></div>
        </button>
      </form>

      <!-- Success Message -->
      <div id="success-message" class="success-message" style="display: none;">
        <div class="success-icon" id="success-icon"></div>
        <h3>Thank You!</h3>
        <p>We've received your demo request and sent the details to your email.</p>
        <a href="${DEMO_URL}" target="_blank" class="demo-link">
          Access Demo Now →
        </a>
        <p class="demo-credentials">
          <small>Demo credentials have been sent to your email</small>
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 Train App. All rights reserved.</p>
    </footer>
  </div>
`;

window.onload = function () {
  const form = document.getElementById("demoForm") as HTMLFormElement;
  const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
  const btnText = document.getElementById("btn-text") as HTMLSpanElement;
  const btnAnimation = document.getElementById(
    "btn-animation"
  ) as HTMLDivElement;
  const successMessage = document.getElementById(
    "success-message"
  ) as HTMLDivElement;
  const successIcon = document.getElementById("success-icon") as HTMLDivElement;
  const formatGroup = document.getElementById("format-group") as HTMLDivElement;

  // Show/hide program format question based on "used program" answer
  const usedProgramRadios = document.querySelectorAll(
    'input[name="used_program"]'
  );
  usedProgramRadios.forEach((radio) => {
    radio.addEventListener("change", function (e) {
      const target = e.target as HTMLInputElement;
      if (target.value === "yes") {
        formatGroup.style.display = "block";
      } else {
        formatGroup.style.display = "none";
        // Uncheck all format checkboxes when "No" is selected
        const formatCheckboxes = document.querySelectorAll(
          'input[name="program_format"]'
        );
        formatCheckboxes.forEach((checkbox) => {
          (checkbox as HTMLInputElement).checked = false;
        });
      }
    });
  });

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Disable button and show loading state
    submitBtn.disabled = true;
    btnText.textContent = "Sending...";

    const formData = new FormData(form);
    const formObject: { [key: string]: string | string[] } = {};

    // Handle regular form fields
    formData.forEach((value, key) => {
      if (key === "program_format") {
        // Collect all checked program formats
        if (!formObject[key]) {
          formObject[key] = [];
        }
        (formObject[key] as string[]).push(value as string);
      } else if (!formObject[key]) {
        formObject[key] = value as string;
      }
    });

    // Get all checked program formats
    const formatCheckboxes = document.querySelectorAll(
      'input[name="program_format"]:checked'
    );
    const programFormats: string[] = [];
    formatCheckboxes.forEach((checkbox) => {
      programFormats.push((checkbox as HTMLInputElement).value);
    });
    if (programFormats.length > 0) {
      formObject.program_format = programFormats;
    }

    try {
      // Send to Web3Forms (if you have the API key)
      if (import.meta.env.VITE_KEY) {
        const web3FormData = new FormData();
        web3FormData.append("access_key", import.meta.env.VITE_KEY);
        web3FormData.append(
          "subject",
          `New Demo Request from ${formObject.name}`
        );
        web3FormData.append("from_name", "Train Demo Request");
        web3FormData.append("email", formObject.email as string);
        const programFormatsText = Array.isArray(formObject.program_format)
          ? formObject.program_format.join(", ")
          : formObject.program_format || "N/A";

        web3FormData.append(
          "message",
          `
Name: ${formObject.name}
Email: ${formObject.email}
Role/Experience: ${formObject.role}
Used Fitness/Nutrition Program: ${formObject.used_program}
Program Format(s): ${programFormatsText}
        `
        );

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: web3FormData,
        });
      }

      // Send to your custom endpoint (if configured)
      if (import.meta.env.VITE_API_CUSTOM) {
        await fetch(import.meta.env.VITE_API_CUSTOM, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipient: formObject.email,
            name: formObject.name,
            demoUrl: DEMO_URL,
            formData: formObject,
          }),
        });
      }

      // Show success animation
      btnText.style.display = "none";
      btnAnimation.style.display = "block";

      lottie.loadAnimation({
        container: btnAnimation,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: successanimation,
      });

      // Show success message after animation
      setTimeout(() => {
        form.style.display = "none";
        successMessage.style.display = "block";

        // Animate success icon
        lottie.loadAnimation({
          container: successIcon,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: successanimation,
        });
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      btnText.textContent = "Error - Please try again";
      submitBtn.disabled = false;

      setTimeout(() => {
        btnText.textContent = "Request Demo Access";
      }, 3000);
    }
  });
};
