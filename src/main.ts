import lottie from "lottie-web";
import "./style.css";
import logo from "./assets/icons/logo.svg";
import whatsapp from "./assets/icons/whatsapp.svg";
import instagram from "./assets/icons/instagram.svg";
import linkedin from "./assets/icons/linkedin.svg";
import twitter from "./assets/icons/twitter.svg";
import tiktok from "./assets/icons/tiktok.svg";
import successanimation from "./assets/success-animation.json";

const DEMO_URL = import.meta.env.VITE_DEMO_URL;
const TRAIN_EMAIL_API = import.meta.env.VITE_TRAIN_EMAIL_API;

interface BeforeDemoQuestions {
  name: string;
  email: string;
  role: string;
  used_program: string;
  program_format?: string[];
}

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
        <h3>Program Management</h3>
        <p>Create workout and nutirition programs that you can easily share with others</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📊</div>
        <h3>Workout Tracking</h3>
        <p>Monitor athlete performance with detailed analytics and insights</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💬</div>
        <h3>Lead Generation</h3>
        <p>Keep track of who engages with your programs and build a client list</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📱</div>
        <h3>Designed Simply</h3>
        <p>No hassle sign up - easy program builder, inuitive workout designer and simple UI</p>
      </div>
    </section>

    <!-- Demo Request Form -->
    <section class="demo-section" id="demo-section">
      <h2 class="section-title">Request a Demo</h2>
      <p class="section-subtitle">Fill out the form below and we'll send you access to our live demo</p>
      
      <form id="demoForm" class="demo-form">
        <div class="form-group">
          <label for="name">What is your name? *</label>
          <input type="text" id="name" autocomplete="name" name="name" required placeholder="John Doe" />
        </div>

        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" autocomplete="email" name="email" required placeholder="john@example.com" />
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
          <fieldset>
            <legend>Do you currently or have you ever used a fitness or nutrition program? *</legend>
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
          </fieldset>
        </div>

        <div class="form-group" id="format-group" style="display: none;">
          <fieldset>
            <legend>If yes, what was the format of those programs?</legend>
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
          </fieldset>
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

  // Send confirmation email to user
  async function sendConfirmationEmail(
    email: string,
    name: string
  ): Promise<void> {
    try {
      const response = await fetch(`${TRAIN_EMAIL_API}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: email,
          name: name,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Confirmation email sent successfully:", data);
    } catch (error) {
      console.error("Failed to send confirmation email:", error);
    }
  }

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
      const beforeDemoQuestions: BeforeDemoQuestions = {
        name: formObject.name as string,
        email: formObject.email as string,
        role: formObject.role as string,
        used_program: formObject.used_program as string,
      };

      // Add program_format only if it exists
      if (
        formObject.program_format &&
        Array.isArray(formObject.program_format)
      ) {
        beforeDemoQuestions.program_format = formObject.program_format;
      }

      const response = await fetch(`${TRAIN_EMAIL_API}/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(beforeDemoQuestions),
      });

      if (!response.ok) {
        throw new Error(`API error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Form submitted successfully:", data);

      await sendConfirmationEmail(
        formObject.email as string,
        formObject.name as string
      );

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
