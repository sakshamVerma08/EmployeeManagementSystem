# 🚀 Employee Management System

A modern, responsive web app for managing employees and their tasks. Built with **ReactJS** and **Tailwind CSS**, this project enables Admins to assign, monitor, and update tasks, while Employees can track their own progress.

---

## 🌐 Live Demo

👉 [View Demo](https://your-vercel-link.vercel.app)  
🧪 Use the following credentials to log in and explore:

| Role     | Email                   | Password  |
|----------|-------------------------|-----------|
| Admin    | `admin@example.com`     | `admin123`|
| Employee | `employee1@example.com` | `emp12345`|
| Employee | `employee2@example.com` | `emp12345`|

---

## 🛠 Tech Stack

- ⚛️ **React.js** – UI components and state management
- 🎨 **Tailwind CSS** – Styling and responsive design
- 🧠 **useContext + localStorage** – Role-based login system
- 🧪 **Framer Motion** – UI animations
- 🔐 **Custom Auth (Local)** – Simulated authentication

---

## 📦 Features

### 👤 Role-based Login
- Admin and Employee login simulation using pre-defined credentials.
- Separate dashboards for each user type.

### ✅ Admin Functionalities
- Create & assign tasks to employees.
- View all tasks with real-time updates.
- Modify task status (Complete / Failed).

### 🧑‍💻 Employee Functionalities
- View assigned tasks.
- Update task status to show progress.
- See real-time updates after every change.

### 📱 Fully Responsive
- Optimized for desktop, tablet, and mobile devices using Tailwind's utility classes.

### 🎯 Clean UX
- Login hints for users.
- Minimal UI with animations.
- Hover effects, toasts, and more!

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ems-clone.git
cd ems-clone

```

### 2. Install Dependencies
```
npm install
```

### 3. Run the App
```
npm run dev
```


├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Login, AdminDashboard, EmployeeDashboard
│   ├── context/           # AuthContext for managing roles
│   ├── data/              # Hardcoded user/task data
│   └── App.js


 
---

Let me know if you want help with adding images or deploying the app for the `Live Demo` link!
```
