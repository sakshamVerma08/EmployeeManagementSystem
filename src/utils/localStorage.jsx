/*const employees = [
  {
    id: 1,
    name: "Amit",
    email: "amitvirmani1972@gmail.com",
    password: "1234",
    taskCounts: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 0,
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Complete onboarding documentation",
        description: "Finish all onboarding paperwork by end of the week.",
        date: "2024-11-03",
        category: "HR",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
      },
      {
        taskNumber: 2,

        title: "Set up workstation",
        description: "Arrange and personalize your workstation.",
        date: "2024-11-04",
        category: "Setup",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
      },
      {
        taskNumber: 2,

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
    name: "Shivam",
    email: "shivamkumar2000@gmail.com",
    password: "1234",
    taskCounts: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 0,
    },
    tasks: [
      {
        taskNumber: 1,

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
        taskNumber: 2,

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
        taskNumber: 3,

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
    name: "Nandini",
    email: "nandiniverma1999@gmail.com",
    password: "1234",
    taskCounts: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 0,
    },
    tasks: [
      {
        taskNumber: 1,

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
        taskNumber: 2,

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
        taskNumber: 3,

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
    name: "Sakshi",
    email: "sakshimalik1234@gmail.com",
    password: "1234",
    taskCounts: {
      active: 3,
      completed: 0,
      newTask: 2,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
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
        taskNumber: 2,
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
        taskNumber: 3,
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
    name: "Raju",
    email: "rajuyadav6942@gmail.com",
    password: "1234",
    taskCounts: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 0,
    },
    tasks: [
      {
        taskNumber: 1,
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
        taskNumber: 2,
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
        taskNumber: 3,
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

*/

const employees = [
  {
    id: 1,
    name: "Amit",
    email: "amitvirmani1972@gmail.com",
    password: "1234",
    taskCounts: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 0,
    },
    tasks: [
      {
        id: "task1-Amit",
        taskNumber: 1,
        title: "Complete onboarding documentation",
        description: "Finish all onboarding paperwork by end of the week.",
        date: "2024-11-03",
        category: "HR",
        active: false,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        id: "task2-Amit",
        taskNumber: 2,
        title: "Set up workstation",
        description: "Arrange and personalize your workstation.",
        date: "2024-11-04",
        category: "Setup",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
      },
      {
        id: "task3-Amit",
        taskNumber: 2,
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
    name: "Shivam",
    email: "shivamkumar2000@gmail.com",
    password: "1234",
    taskCounts: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 0,
    },
    tasks: [
      {
        id: "task1-Shivam",
        taskNumber: 1,
        title: "Code review",
        description: "Review PRs from the frontend team.",
        date: "2024-11-03",
        category: "Development",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
      },
      {
        id: "task2-Shivam",
        taskNumber: 2,
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
        id: "task3-Shivam",
        taskNumber: 3,
        title: "Prepare presentation",
        description: "Prepare slides for the upcoming sprint review.",
        date: "2024-11-10",
        category: "Meetings",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    name: "Nandini",
    email: "nandiniverma1999@gmail.com",
    password: "1234",
    taskCounts: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 0,
    },
    tasks: [
      {
        id: "task1-Nandini",
        taskNumber: 1,
        title: "Update database schema",
        description: "Add new fields to the user table.",
        date: "2024-11-03",
        category: "Database",
        active: false,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        id: "task2-Nandini",
        taskNumber: 2,
        title: "Optimize queries",
        description: "Improve performance of SQL queries.",
        date: "2024-11-04",
        category: "Optimization",
        active: false,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        id: "task3-Nandini",
        taskNumber: 3,
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
    name: "Sakshi",
    email: "sakshimalik1234@gmail.com",
    password: "1234",
    taskCounts: {
      active: 3,
      completed: 0,
      newTask: 2,
      failed: 1,
    },
    tasks: [
      {
        id: "task1-Sakshi",
        taskNumber: 1,
        title: "Design landing page",
        description: "Create a design draft for the new landing page.",
        date: "2024-11-05",
        category: "Design",
        active: false,
        completed: false,
        newTask: false,
        failed: true,
      },
      {
        id: "task2-Sakshi",
        taskNumber: 2,
        title: "Feedback session",
        description: "Gather feedback on the initial design from the team.",
        date: "2024-11-08",
        category: "Meetings",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
      },
      {
        id: "task3-Sakshi",
        taskNumber: 3,
        title: "Update design system",
        description: "Add new components to the design system.",
        date: "2024-11-09",
        category: "Design",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    name: "Raju",
    email: "rajuyadav6942@gmail.com",
    password: "1234",
    taskCounts: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 0,
    },
    tasks: [
      {
        id: "task1-Raju",
        taskNumber: 1,
        title: "Client onboarding",
        description: "Guide new client through the platform.",
        date: "2024-11-06",
        category: "Support",
        active: false,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        id: "task2-Raju",
        taskNumber: 2,
        title: "Analyze customer feedback",
        description: "Review recent customer surveys.",
        date: "2024-11-07",
        category: "Research",
        active: false,
        completed: false,
        newTask: true,
        failed: false,
      },
      {
        id: "task3-Raju",
        taskNumber: 3,
        title: "Create report",
        description: "Summarize findings from customer feedback analysis.",
        date: "2024-11-08",
        category: "Documentation",
        active: false,
        completed: false,
        newTask: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Saksham",
    email: "sak45@gmail.com",
    password: "12344",
  },
  {
    id:2,
    name:"Pratibha",
    email:"pratibhaJha22@gmail.com",
    password:"1234"
  }
];

// Method below stores the data in arrays in the localStorage in a readable format
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
