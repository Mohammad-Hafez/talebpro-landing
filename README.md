# Multilingual Landing Page

A Next.js landing page with Arabic and English localization, built with TypeScript and Tailwind CSS.

## Features

- 🌐 **Internationalization**: Support for Arabic (RTL) and English (LTR)
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI**: Clean design with smooth animations
- 📝 **Contact Form**: Integrated with external API
- 🔄 **Language Switching**: Dynamic language toggle
- ⚡ **Performance**: Optimized with Next.js App Router

## Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
NEXT_PUBLIC_API_URL=https://your-backend-api.com/api
\`\`\`

## API Integration

The contact form sends data to your external API endpoint at `${NEXT_PUBLIC_API_URL}/contact` with the following payload:

\`\`\`json
{
  "firstName": "string",
  "lastName": "string", 
  "email": "string",
  "subject": "string",
  "age": "number",
  "school": "string",
  "language": "en" | "ar"
}
\`\`\`

Expected API response format:
\`\`\`json
{
  "success": true,
  "message": "Success message"
}
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── dictionaries.ts
│   └── globals.css
├── components/
│   ├── header.tsx
│   ├── hero.tsx
│   ├── questions.tsx
│   ├── waiting-list.tsx
│   ├── services.tsx
│   ├── location.tsx
│   └── footer.tsx
├── dictionaries/
│   ├── en.json
│   └── ar.json
├── lib/
│   └── api.ts
├── types/
│   └── contact.ts
├── public/
│   └── [images]
└── middleware.ts
\`\`\`

## Localization

- **English**: `/en` or `/` (default)
- **Arabic**: `/ar`

The middleware automatically detects the user's preferred language and redirects accordingly.

## Development

1. Install dependencies: `npm install`
2. Set up environment variables
3. Run development server: `npm run dev`
4. Configure your backend API endpoint

## Backend Requirements

Your backend should handle:
- POST `/contact` endpoint
- CORS configuration for your domain
- Input validation and sanitization
- Email notifications (optional)
- Database storage (optional)
