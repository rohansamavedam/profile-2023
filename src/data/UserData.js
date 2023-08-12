const UserData = {
    lastUpdated: {
        date: "Aug 12th 2023"
    },
    aboutMe: {
        firstName: "Rohan",
        lastName: "Samavedam",
        userTitle: "Software Engineering Student",
        linkedinUrl: "https://www.linkedin.com/in/rohansamavedam/",
        githubUrl: "https://github.com/rohansamavedam",
        mediumUrl: "https://discord.gg/e7jfdafV",
        email: "rohansamavedam@gmail.com", 
        paragraphs: [
            `
                I'm a software engineer currently living in San Jose. 
                In the next 2-3 years, I'm driven to use and grow my experience, skills, 
                and education in bringing digital products to life. 
            `,
            `
                I use this website to write about the things I'm learning, the projects I'm working on, 
                and the readings I keep referring back to. 
                If you find anything interesting about my work, have an opportunity for me, 
                or want to start a conversation, hmu on LinkedIn or write to me. 
            `,
            `
                When I'm not working or learning, you'll find me playing tennis, 
                listening to chill-electronic beats, cooking, 
                and wandering around the town. Feel free to reach out 😀.
            `
        ]
    },
    curretly: [
        {
            title: "Admitted",
            url: "https://www.goodreads.com/book/show/55387773-admitted",
            description: "The missing guide to craft a winning application and studying abroad."

        },
        {
            title: "Understanding Angular",
            url: "https://angular.io/guide/understanding-angular-overview",
            description: "Learning angular as part of my current work requirement."
        }
    ],
    projects: [
        {
            title: "TravSafe",
            subTitle: "React Native Application",
            shortDescription: "A moblie application that helps users stay updated about the covid-19 safety while they plan their travel.",
            moreInfoExists: true,
            longDescription: "",
            techStack: "React Native, AWS Amplify, API Gateway, Lambda",
            liveUrl: "https://github.com/TravSafe-FinalYearProject/TravSafe",
            githubUrl: "https://github.com/TravSafe-FinalYearProject/TravSafe",
            imageSrcOne: "https://images.pexels.com/photos/434400/pexels-photo-434400.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",
            readmeUrl: "https://github.com/TravSafe-FinalYearProject/TravSafe/blob/master/README.md",

        }
    ],
    experience: 
        [
            {
                position: "Software Engineer",
                company: "One Medical",
                timeline: "Currently",
                workDescp: [
                    `Currently....`,
                    `Using TypeScript, Angular, React, Rails, AWS, Git, JIRA`
                ],
                tools: [
                ]

            },
            {
                position: "Software Engineer",
                company: "Goodreads.com",
                timeline: "Sep 2021 - Jan 2023 . 1 yr 5 months",
                workDescp: [
                    `
                        I worked on building features on the book page which is the most 
                        vital and visited page on Goodreads.com. I was handling the migration of the book page 
                        from old Ruby on Rails stack to modern TypeScript, Next.js, and GraphQL based application. 
                        I worked with a team of 8 engineers and alongside product, design, and marketing teams. 
                    `,
                    `
                        I owned the delivery of features end to end considering the software design, 
                        FE development, BE development, integration, and testing. Also had experience being on-call 
                        where I created documentation, dashboards, and updated run book to improve the operational excellence process. 
                    `
                ],
                tools: [
                    "TypeScript, Next.js & React (SSR, CSR), GraphQL",
                    "Ruby on Rails",
                    "AWS Services such as AppSync, S3, IAM",
                    "CodeCommit, Git, JIRA"
                ]

            },
            {
                position: "Software Engineer Intern",
                company: "Amazon",
                timeline: "May 2020 - Aug 2020 . 4 months",
                workDescp: [
                    `
                        Developed a UI that handles incoming authentication request and redirects the 
                        user to an IdP upon selection. Implemented backend business logic via serverless 
                        microservices using Lambda’s, Java Spring, and Google Guice Framework. 
                        Wrote unit and integration tests to test microservices using Cucumber 
                    `
                ],
                tools: [
                    "React.js",
                    "OAUTH 2.0 Protocol",
                    "AWS Services such as Lambda, S3, CloudFront, DynamoDB",
                    "Jest for testing"
                ]
            }
        ],
    education: 
        [
            {
                degree: "BS in Software Engineering",
                college: "SJSU",
                timeline: "Aug 2017 - Aug 2021",
                description: " This degree goes beyond programming to include engineering methodologies and hands-on project experience. This program prepared me to become a qualified engineer for the Silicon Valley and International engineering market by providing me with state-of-the-art engineering methods, emergent technologies, teamwork experience, and solutions. This program also helped me address design, coding, validation, and measurement issues for constructing large-scale computer systems and software applications in the real world.",
                coursework: [
                    "Data Structures and Algorithms" ,
                    "Object Oriented Design", 
                    "Database Management Systems",
                    "Server Side Programming" ,
                    "Software Engineering Methodologies" ,
                ]
            }
        ],
    skills:
        [
            {   name: "Front-end",
                stack: [
                "React", "React Native", "Redux", "JavaScript", "HTML", "CSS", "Django", "jQuery"
            ]},
            {   name: "Back-end",
                stack: [
                "Node", "Express", "Spring", "Java", "AWS", "Python", "SQL", "PHP"
            ]},
            {   name: "Other",
                stack: [
                "Version Control", "REST", "MVC", "Docker", "Responsive Design", "SASS", "Bootstrap", "Web Sockets"
            ]}
        ],
    reads: [
        {
            title: "TypeORM",
            url: "https://typeorm.io/",
            description: "Learing TypeORM with PostgresSQL to write backend code in Node.js and GraphQL with Apollo Server"

        },
        {
            title: "The Complete Node.js Developer",
            url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
            description: "Learned the fundamentals of Node, after which, dived deep into great tools such as Express, Mongoose, MongoDB. Built various REST API's and created a real-time chat application utilizing Socket.io."
        },
        {
            title: "A Complete Gudie to Flexbox",
            url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            description: "",
        },
    ]
}

export default UserData;
