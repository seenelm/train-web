# Train - Demo Request Landing Page

A modern, responsive landing page for Train that allows potential users to request demo access.

## Features

- 🎨 **Modern Design** - Clean, professional UI with dark mode support
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 📧 **Email Integration** - Automatically sends form submissions to your team email
- ✨ **Smooth Animations** - Lottie animations for better UX
- 🔗 **Demo Link** - Automatically shows demo URL after form submission
- 📊 **Comprehensive Form** - Collects name, email, role, team size, and interests

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required variables:

- `VITE_DEMO_URL` - Your demo application URL
- `VITE_TRAIN_EMAIL_API` - Your backend API endpoint (e.g., `https://api.trainapp.com/api`)

### 3. Configure Backend API

Your backend should have a `/submit-form` endpoint that accepts the `BeforeDemoQuestions` DTO:

```typescript
interface BeforeDemoQuestions {
  name: string;
  email: string;
  role: string;
  used_program: string;
  program_format?: string[];
}
```

The endpoint should handle:

- Sending notification email to your team
- Sending demo credentials to the user
- Any other business logic needed

## Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Form Submission Flow

1. User fills out the demo request form
2. Form data is packaged into `BeforeDemoQuestions` DTO
3. DTO is sent as JSON to `${VITE_TRAIN_EMAIL_API}/submit-form`
   - Backend processes the form data and sends team notification
4. Confirmation email sent to user via `${VITE_TRAIN_EMAIL_API}/send-email`
   - Sends demo credentials and access information to user
5. Success animation plays
6. Demo link is displayed to the user

### API Requests

**1. Submit Form** - `POST ${VITE_TRAIN_EMAIL_API}/submit-form`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "trainer",
  "used_program": "yes",
  "program_format": ["pdf", "application"] // Optional, only if used_program = "yes"
}
```

**2. Send Confirmation Email** - `POST ${VITE_TRAIN_EMAIL_API}/send-email`

```json
{
  "recipient": "john@example.com",
  "name": "John Doe"
}
```

### Error Handling

- **Form submission error**: Throws error and displays to user
- **Confirmation email error**: Logs error but doesn't fail the entire flow
- Proper HTTP status checking with `response.ok`
- Detailed error messages with status codes
- User-friendly error display ("Error - Please try again")
- Console logging for debugging
- 3-second auto-reset on error

## Customization

### Colors

Edit CSS variables in `src/style.css`:

```css
:root {
  --primary-color: #646cff;
  --primary-hover: #535bf2;
  /* ... more variables */
}
```

### Content

- **Hero Section**: Edit in `src/main.ts` (lines 38-43)
- **Features**: Edit in `src/main.ts` (lines 47-68)
- **Form Fields**: Edit in `src/main.ts` (lines 75-119)

### Social Links

Update social media links in `src/main.ts` (lines 19-34)

## Technologies Used

- **Vite** - Fast build tool
- **TypeScript** - Type safety
- **Lottie** - Smooth animations
- **Web3Forms** - Email service
- **CSS Variables** - Easy theming

## Deployment

This is a static site and can be deployed to:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## License

© 2025 Train App. All rights reserved.
