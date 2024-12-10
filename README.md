# User Profile Viewer 

A simple React application that fetches random user data from the Random User Generator API and displays user profiles. The app allows users to view a random user's details (name, email, and picture) and refresh to fetch a new random profile.

# Features
> Fetches random user profiles using the Random User Generator API.
> Displays user information (name, email, and profile picture).
> Includes a button to fetch a new random user.
> Built using modern tools and best practices, including:
  * React (UI Library)
  * TypeScript (Static Typing)
  * Chakra UI (Component Library for styling)
  * Axios (HTTP Client)
  * Vite (Build Tool)
> Includes unit tests for components and hooks.

# Project Structure
```
user-profile-viewer/
├── src/
│   ├── api/                # API-related logic
│   │   └── randomUser.ts   # Fetch function for Random User Generator
│   ├── components/         # Reusable UI components
│   │   ├── UserCard.tsx    # User information display component
│   │   ├── Button.tsx      # Reusable button component
│   │   └── Loader.tsx      # Loader component
│   ├── hooks/              # Custom hooks
│   │   └── useFetchUser.ts # Hook for fetching user data
│   ├── tests/              # Unit tests
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # App initialization
│   └── index.css           # Global styles
├── package.json            # Project configuration
└── README.md               # Project documentation
```

# Installation
# Prerequisites
Ensure you have the following installed on your system:
  * Node.js (Version specified in .nvmrc)
  * npm or yarn

# Setup Instructions
1. Clone the repository:

```bash
git clone <repository_url>
cd user-profile-viewer
```

# Install dependencies:
```bash
npm install

```
# Start the development server:
```bash
npm run dev
```

# Open the app in your browser at:
http://localhost:5173


