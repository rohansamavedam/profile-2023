const UserData = {
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
                With the tech revolution happening everywhere, from agriculture to aviation 
                and from finance to logistics, I'm pleased that I'm a part of this growth. 
                Since it's a revolution, the most essential skill to possess is being agile and nimble. 
                This means learning new skills, getting out of your comfort zone, 
                and being open to new opportunities wherever they may arise.
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
            title: "Goodreads.com Clone",
            url: "https://github.com/GoodreadsClone",
            description: "Buliding goodreads.com clone to stay in touch with full stack development. Next.js, Typescript, GraphQL, Node.js, Apollo Server, TypeORM, PostgresSQL"
        },
        {
            title: "Master the Coding Interview",
            url: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",
            description: "I was impacted by the recent wave of layoffs, so getting back to the fundamentals of CS and problem solving."
        },

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

        },
        {
            title: "MyRoomie-Roommate Finder",
            subTitle: "Full Stack Web Application",
            shortDescription: "A roommate finding application that finds the best roommate match for the user based on a well designed survey.",
            moreInfoExists: false,
            longDescription: "",
            techStack: "Node, React, Axios, Bootstrap, MongoDB",
            liveUrl: "https://myroommatefinder.herokuapp.com/",
            githubUrl: "https://github.com/rohansamavedam/Roommate-Finder",
            imageSrcOne: "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",

        },
        {
            title: "Real Time Chat Application",
            subTitle: "Web App Using Web Sockets",
            shortDescription: "A chat application that utilies Socket.io for bi-directional communication between server and the client.",
            moreInfoExists: false,
            longDescription: "",
            techStack: "JavaScript, JQuery, AJAX, HTML, CSS, APIs",
            liveUrl: "https://chatroomslive.herokuapp.com/",
            githubUrl: "https://github.com/rohansamavedam/Real-Time-Chat-App",
            imageSrcOne: "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",

        },
    ],
    experience: 
        [
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
            title: "Hooks in React.js",
            url: "https://reactjs.org/docs/hooks-intro.html",
            description: "Hooks, UseState, UseEffect, Rules of using hooks, Building your own hooks, Hooks API references"
        },
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
        {
            title: "From TypeScript to React to Next.js",
            url: "https://nextjs.org/learn/foundations/from-javascript-to-react/essential-javascript-react",
            description: ""
        }
    ]
}

export default UserData;
