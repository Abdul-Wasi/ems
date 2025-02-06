const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Compile and analyze sales data for the past month.",
                "taskDate": "2024-08-30",
                "category": "Reports",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update Client Records",
                "taskDescription": "Ensure all client information is up-to-date.",
                "taskDate": "2024-08-29",
                "category": "Data Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Schedule Team Meeting",
                "taskDescription": "Book a conference room and send invites for a strategy session.",
                "taskDate": "2024-08-31",
                "category": "Meetings",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Write Weekly Newsletter",
                "taskDescription": "Prepare a summary of company updates and announcements.",
                "taskDate": "2024-08-30",
                "category": "Content",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Fix Website Bugs",
                "taskDescription": "Resolve UI issues reported by users.",
                "taskDate": "2024-08-28",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Write Blog Post",
                "taskDescription": "Create a detailed article about industry trends.",
                "taskDate": "2024-08-29",
                "category": "Content",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests from the development team.",
                "taskDate": "2024-08-30",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Raj",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Market Research",
                "taskDescription": "Analyze competitor pricing strategies.",
                "taskDate": "2024-08-27",
                "category": "Research",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project requirements with new clients.",
                "taskDate": "2024-08-30",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Create Presentation",
                "taskDescription": "Prepare slides for upcoming product launch.",
                "taskDate": "2024-08-31",
                "category": "Presentations",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Sneha",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Launch a Facebook ad campaign for the new product.",
                "taskDate": "2024-08-29",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Respond to Customer Queries",
                "taskDescription": "Handle customer support tickets.",
                "taskDate": "2024-08-28",
                "category": "Support",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Write Product Documentation",
                "taskDescription": "Update the user manual with new features.",
                "taskDate": "2024-08-30",
                "category": "Documentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Vikram",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Develop API Endpoints",
                "taskDescription": "Implement authentication and user management API.",
                "taskDate": "2024-08-30",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Test Mobile App",
                "taskDescription": "Perform regression testing on the latest app update.",
                "taskDate": "2024-08-28",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Optimize Database Queries",
                "taskDescription": "Improve query performance for the reporting module.",
                "taskDate": "2024-08-31",
                "category": "Database",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 6,
        "firstName": "Meera",
        "email": "employee6@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Design UI Mockups",
                "taskDescription": "Create wireframes for the upcoming app redesign.",
                "taskDate": "2024-08-27",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Conduct Usability Testing",
                "taskDescription": "Gather user feedback on the prototype.",
                "taskDate": "2024-08-29",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Prepare Marketing Deck",
                "taskDescription": "Design slides for investor pitch.",
                "taskDate": "2024-08-30",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}

