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

- `VITE_KEY` - Your Web3Forms API key (get it free at https://web3forms.com/)
- `VITE_API_CUSTOM` - (Optional) Your custom backend endpoint

### 3. Update Demo URL

In `src/main.ts`, update the `DEMO_URL` constant with your actual demo URL:

```typescript
const DEMO_URL = "https://your-demo-url.com";
```

### 4. Update Team Email

In `src/main.ts`, update the team email address (line 172):

```typescript
to: 'your-team-email@trainapp.com',
```

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
2. Form data is sent to Web3Forms (which forwards to your team email)
3. Optionally sent to your custom API endpoint
4. Success animation plays
5. Demo link is displayed to the user

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
