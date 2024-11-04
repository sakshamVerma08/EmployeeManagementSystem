const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        title: "Complete onboarding documentation",
        description: "Finish all onboarding paperwork by end of the week.",
        date: "2024-11-03",
        category: "HR",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Set up workstation",
        description: "Arrange and personalize your workstation.",
        date: "2024-11-04",
        category: "Setup",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Introduction to team",
        description: "Meet the team and get an overview of ongoing projects.",
        date: "2024-11-05",
        category: "Meetings",
        active: false,
        completed: true,
        newTask: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "shivamkumar2000@gmail.com",
    password: "1234",
    tasks: [
      {
        title: "Code review",
        description: "Review PRs from the frontend team.",
        date: "2024-11-03",
        category: "Development",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Write unit tests",
        description: "Cover recent features with tests.",
        date: "2024-11-05",
        category: "Testing",
        active: false,
        completed: true,
        newTask: false,
        failed: false,
      },
      {
        title: "Prepare presentation",
        description: "Prepare slides for the upcoming sprint review.",
        date: "2024-11-10",
        category: "Meetings",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "nandiniverma1999@gmail.com",
    password: "1234",
    tasks: [
      {
        title: "Update database schema",
        description: "Add new fields to the user table.",
        date: "2024-11-03",
        category: "Database",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Optimize queries",
        description: "Improve performance of SQL queries.",
        date: "2024-11-04",
        category: "Optimization",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Database backup",
        description: "Schedule weekly backup for production.",
        date: "2024-11-07",
        category: "Maintenance",
        active: false,
        completed: true,
        newTask: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "sakshimalik1234@gmail.com",
    password: "1234",
    tasks: [
      {
        title: "Design landing page",
        description: "Create a design draft for the new landing page.",
        date: "2024-11-05",
        category: "Design",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Feedback session",
        description: "Gather feedback on the initial design from the team.",
        date: "2024-11-08",
        category: "Meetings",
        active: true,
        completed: false,
        newTask: false,
        failed: true,
      },
      {
        title: "Update design system",
        description: "Add new components to the design system.",
        date: "2024-11-09",
        category: "Design",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "rajuyadav6942@gmail.com",
    password: "1234",
    tasks: [
      {
        title: "Client onboarding",
        description: "Guide new client through the platform.",
        date: "2024-11-06",
        category: "Support",
        active: false,
        completed: true,
        newTask: false,
        failed: false,
      },
      {
        title: "Analyze customer feedback",
        description: "Review recent customer surveys.",
        date: "2024-11-07",
        category: "Research",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        title: "Create report",
        description: "Summarize findings from customer feedback analysis.",
        date: "2024-11-08",
        category: "Documentation",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    admin: {
      id: 1,
      email: "admin@example.com",
      password: "1234",
    },
  },
];

// Method below stores the data in arrays in the localStorage inn a readable format
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// Method below is responsible to return the data stored in Local Storage.
export const getLocalStorage = () => {
  const employeeData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));

  return { employeeData, adminData };
};
