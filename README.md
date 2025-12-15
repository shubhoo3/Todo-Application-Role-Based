## Todo Application
A modern, role-based task management application built with React, Vite, and Tailwind CSS. Features admin and user dashboards with drag-and-drop functionality.

## Features
**Authentication System:** Role-based access control (Admin & User roles)
**Admin Dashboard:** Manage tasks and users with drag-and-drop task organization
**User Dashboard:** View and manage personal tasks
**Local Storage:** Persistent data storage for tasks and user data
**Responsive UI:** Built with Tailwind CSS for mobile-first design

## Project Structure
```
src/
├── components/
│   ├── admin/              # Admin-specific components
│   │   ├── AdminDashboard.jsx
│   │   ├── DraggableTask.jsx
│   │   ├── TaskForm.jsx
│   │   └── UserCard.jsx
│   ├── auth/               # Authentication components
│   │   └── LoginForm.jsx
│   ├── layout/             # Layout components
│   │   └── MainLayout.jsx
│   ├── shared/             # Shared UI components
│   │   ├── Header.jsx
│   │   └── Notification.jsx
│   └── user/               # User-specific components
│       ├── TaskCard.jsx
│       └── UserDashboard.jsx
├── contexts/               # React Context API
│   └── AuthContext.jsx
├── hooks/                  # Custom React hooks
│   ├── useAuth.js
│   └── useTasks.js
├── utils/                  # Utility functions
│   ├── constants.js
│   ├── helpers.js
│   └── storage.js
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Global styles

```

## Core Components
**1. AdminDashboard**
Full task management interface
User management
Drag-and-drop task reorganization

**2. UserDashboard**
Personal task view
Task management
User-specific task operations

**3. Authentication**
LoginForm component handles user authentication
Role-based routing (Admin vs User)
AuthContext manages global auth state

**4. Data Management**
useAuth hook - Authentication state
useTasks hook - Task management
useLocalStorage hook - Persistent storage
Local storage utilities for data persistence
