# EmpFlow 💼

**A role-based Employee Management System with separate Admin and Employee dashboards.**

> Live Demo → [abdul-wasi.github.io/ems](https://abdul-wasi.github.io/ems)  
> Login: `admin@example.com` / `123`

---

## Overview

EmpFlow is a frontend task management system that demonstrates role-based access control, global state management with React Context API, and a clean component architecture — all without a backend. Admins can create and assign tasks to employees; employees see their personal task board organized by status.

Built as a focused engineering exercise to explore React Context, prop-free state distribution, and component modularity.

---

## Features

### 🔑 Authentication
- Separate login flows for Admin and Employee roles.
- Session persisted via `localStorage` — refresh the page and stay logged in.
- Credentials validated against an in-memory employee dataset.

### 🛠️ Admin Dashboard
- View all employees and their task counts (New / Active / Completed / Failed) in a summary table.
- Create and assign tasks to any employee by name, with title, description, due date, and category.
- Task counts update in real-time on the Admin table upon assignment.

### 👩‍💻 Employee Dashboard
- Personal task stats displayed as colored summary cards (New, Completed, Active, Failed).
- Horizontal scrollable task board showing each task as a card, color-coded by status.
- Task types rendered conditionally: New, Accepted (Active), Completed, Failed — each with distinct UI.

### ⚙️ State Management
- Single `AuthContext` wraps the entire app.
- Employee data initialized from `localStorage` on mount; all task mutations flow through context, eliminating prop-drilling entirely.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite |
| State | React Context API |
| Styling | Tailwind CSS v4 |
| Storage | localStorage |
| Deployment | GitHub Pages |

---

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   ├── TaskList/
│   │   ├── TaskList.jsx
│   │   ├── NewTask.jsx
│   │   ├── AcceptTask.jsx
│   │   ├── CompleteTask.jsx
│   │   └── FailedTask.jsx
│   └── other/
│       ├── Header.jsx
│       ├── CreateTask.jsx
│       ├── AllTask.jsx
│       └── TaskListNumbers.jsx
├── context/
│   └── AuthProvider.jsx
├── utils/
│   └── localStorage.jsx   # Employee seed data + get/set helpers
└── App.jsx
```

---

## Getting Started

```bash
git clone https://github.com/Abdul-Wasi/ems
cd ems
npm install
npm run dev
```

No environment variables required — all data is seeded from `src/utils/localStorage.jsx`.

---

## Demo Credentials

| Role | Email | Password |
|---|---|---|
| Admin | admin@example.com | 123 |
| Employee 1 | employee1@example.com | 123 |
| Employee 2 | employee2@example.com | 123 |
| Employee 3 | employee3@example.com | 123 |
| Employee 4 | employee4@example.com | 123 |
| Employee 5 | employee5@example.com | 123 |
| Employee 6 | employee6@example.com | 123 |

---

## Roadmap

- [ ] Employees can accept, complete, or reject tasks interactively
- [ ] Firebase / MongoDB integration for persistent backend storage
- [ ] JWT-based authentication replacing localStorage
- [ ] Notification system for task status changes
- [ ] Employee self-registration

---

## Author

**Abdul Wasi** — [abdulwasi.site](https://abdulwasi.site) · [LinkedIn](https://linkedin.com/in/abdulwasibhat) · [GitHub](https://github.com/Abdul-Wasi)
