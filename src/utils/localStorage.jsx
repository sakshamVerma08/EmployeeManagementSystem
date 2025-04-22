const employees = [
  {
    id: 1,
    name: "Amit",
    email: "amitvirmani1972@gmail.com",
    password: "1234",
    taskCounts: {
      active: 0,
      completed: 0,
      newTask: 1,
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
        newTask: true, // only this task is new
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
      active: 0,
      completed: 0,
      newTask: 1,
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
    ],
  },
  {
    id: 3,
    name: "Nandini",
    email: "nandiniverma1999@gmail.com",
    password: "1234",
    taskCounts: {
      active: 0,
      completed: 0,
      newTask: 1,
      failed: 0,
    },
    tasks: [
      {
        id: "task3-Nandini",
        taskNumber: 3,
        title: "Database backup",
        description: "Schedule weekly backup for production.",
        date: "2024-11-07",
        category: "Maintenance",
        active: false,
        completed: false,
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
      active: 0,
      completed: 0,
      newTask: 1,
      failed: 0,
    },
    tasks: [
      {
        id: "task3-Sakshi",
        taskNumber: 3,
        title: "Update design system",
        description: "Add new components to the design system.",
        date: "2024-11-09",
        category: "Design",
        active: false,
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
      active: 0,
      completed: 0,
      newTask: 1,
      failed: 0,
    },
    tasks: [
      {
        id: "task3-Raju",
        taskNumber: 3,
        title: "Create report",
        description: "Summarize findings from customer feedback analysis.",
        date: "2024-11-08",
        category: "Documentation",
        active: false,
        completed: false,
        newTask: false,
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
    id: 2,
    name: "Pratibha",
    email: "pratibhaJha22@gmail.com",
    password: "1234",
  },
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
