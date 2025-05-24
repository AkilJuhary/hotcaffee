# HotCaffee ☕

A modern, mobile-friendly, and SEO-optimized web application for a coffee shop built with Next.js and Express.js.

## Features

- Responsive design optimized for all devices
- Server-side rendering for better SEO
- Real-time product updates
- Modern and intuitive user interface
- Product catalog with images
- Category-based filtering

## Tech Stack

### Frontend
- Next.js 14
- React.js
- TypeScript
- Tailwind CSS
- Next.js Image Optimization

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- TypeScript
- CORS enabled

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/hotcaffee.git
cd hotcaffee
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Set up backend environment variables:
Create a `.env` file in the backend directory with:
```
# Server Configuration
PORT=<your-port-number>
NODE_ENV=development

# Database Configuration
MONGODB_URI=<your-mongodb-connection-string>

# Production Only
FRONTEND_URL=<your-frontend-url-in-production>
```

4. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

5. Set up frontend environment variables:
Create a `.env.local` file in the frontend directory with:
```
NEXT_PUBLIC_API_URL=<your-backend-api-url>
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. In a new terminal, start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Development Workflow

1. Create a new branch for your feature or fix:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-fix-name
```

2. Make your changes and commit them:
```bash
git add .
git commit -m "Description of your changes"
```

3. Push your branch to GitHub:
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request on GitHub:
   - Go to the repository on GitHub
   - Click "Compare & pull request"
   - Fill in the PR description with:
     - What changes you made
     - Why you made them
     - Any special testing instructions
   - Request review from team members

5. Address review comments if any

6. Once approved, your PR can be merged

## Project Structure

```
hotcaffee/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/      # Next.js app directory
│   │   ├── components/# React components
│   │   ├── services/ # API services
│   │   └── types/    # TypeScript types
│   └── public/       # Static files
└── backend/          # Express.js backend API
    ├── src/
    │   ├── models/   # MongoDB models
    │   ├── routes/   # API routes
    │   ├── middleware/# Express middleware
    │   └── utils/    # Utility functions
    └── tests/        # Backend tests
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

