document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        {
            
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
            technology: ['HTML', 'CSS'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: ['C#'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        },
        //Web Development certificate
        {
            subject: 'ITM',
            number: 111,
            title: 'Introduction to Databases',
            credits: 3,
            certificate: 'Web Development',
            description: 'This course covers the basic elements of database management systems. It introduces students to the concepts of logical and physical relationships in a data model and the concepts of inner and outer joins. Students will use a computer aided software engineering (CASE) tool to design, create, and query a database.',
            technology: ['Data Base', 'MySQL'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 330,
            title: 'Web Frontend Development II',
            credits: 3,
            certificate: 'Web Development',
            description: 'This course will continue with the topics presented in WDD 231 Web Front-end Development I: Building websites with HTML, CSS, and Javascript. This course will have a stronger emphasis on Javascript development and mobile design as students create mobile web applications.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 340,
            title: 'Web Backend Development',
            credits: 3,
            certificate: 'Web Development',
            description: 'This programming course focuses on constructing dynamic web sites using server-side languages, making use of databases and design patterns. The concepts introduced in Web Frontend Development courses are expected to be continued and implemented.',
            technology: ['Server Side'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 341,
            title: 'Web Services',
            credits: 3,
            certificate: 'Web Development',
            description: 'This course focuses on the backend development of dynamic, service-oriented web applications. Students will learn how to design and implement web services, how to interact with data storage, and how to use these tools to build functioning web applications.',
            technology: ['Server Side'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 430,
            title: 'Web Full-Stack Development',
            credits: 3,
            certificate: 'Web Development',
            description: 'This course will teach you how to design and build interactive web based applications using HTML, CSS, JavaScript, and a web development stack.',
            technology: ['Server Side'],
            completed: false
        },
        
        {
            subject: 'CSE',
            number: 212,
            title: 'Programming w/Data Struct',
            credits: 2,
            certificate: 'Software Development',
            description: 'This course will introduce students to the common programming data structures with an emphasis on how to use them to solve practical, real-world problems.',
            technology: ['.NET, C#'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 270,
            title: 'Software Testing',
            credits: 3,
            certificate: 'Software Development',
            description: 'Software Testing is a systematic process of verifying requirements and design elements, features, or standards against the implementation to increase product success. The verification process uses a set of test paths starting from the minor units up to the entire deliverable system using predetermined or live data to build confidence that the product works right (as specified). CSE 270 will explore testing standards, techniques, tools, and cases.',
            technology: ['Software Testing'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 300,
            title: 'Professional Readiness',
            credits: 1,
            certificate: 'Software Development',
            description: 'This course will help prepare students to be professionals in their major by completing activities that will provide professional connections, confidence, and employability.',
            technology: [''],
            completed: false
        },
        {
            subject: 'CSE',
            number: 310,
            title: 'Applied Programming',
            credits: 3,
            certificate: 'Software Development',
            description: 'This course will teach students to work in teams on large projects using new technology on self-defined projects. The class will simulate real-word programming projects with the aim of producing workable solutions that have potential impact.',
            technology: [''],
            completed: false
        },
        {
            subject: 'CSE',
            number: 325,
            title: '.NET Software Development',
            credits: 3,
            certificate: 'Software Development',
            description: 'This course leverages a student`s fundamental software development and core web technology background with the Microsoft .NET framework with C# using the Visual Studio Integrated Development Environment. Students will build upon a C# foundation using the ASP.NET framework to design and develop scalable, standards-based web sites, applications, and services using contemporary methodologies and established design patterns. Team work and programming deliverables will be required.',
            technology: [''],
            completed: false
        },
        {
            subject: 'CSE',
            number: 370,
            title: 'Software Eng. Principles',
            credits: 2,
            certificate: 'Software Development',
            description: 'Students learn to analyze and make decisions in software projects through all phases of the software development lifecycle, including requirements elicitation, design, testing, verification, and maintenance.',
            technology: [''],
            completed: false
        }
    ];

    function output(courses) {
        const certificates = {
            'Web and Computer Programming': {
                container: document.querySelector('.boxcertificate01'),
                totalCredits: 0,
                totalCreditsElement: document.getElementById('totalCreditsCert01')
            },
            'Web Development': {
                container: document.querySelector('.boxcertificate02'),
                totalCredits: 0,
                totalCreditsElement: document.getElementById('totalCreditsCert02')
            },
            'Software Development': {
                container: document.querySelector('.boxcertificate03'),
                totalCredits: 0,
                totalCreditsElement: document.getElementById('totalCreditsCert03')
            }
        };

        courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course', course.completed ? 'courseComplete' : 'courseNoComplete');
            courseDiv.id = 'course';
            courseDiv.setAttribute('data-subject', course.subject);

            const courseTitle = document.createElement('h3');
            courseTitle.textContent = `${course.subject} ${course.number}`;
            courseDiv.appendChild(courseTitle);

            const certificate = certificates[course.certificate];
            if (certificate) {
                certificate.container.appendChild(courseDiv);
                certificate.totalCredits += course.credits;
            }
        });

        
        Object.values(certificates).forEach(cert => {
            cert.totalCreditsElement.textContent = `Total Credits: ${cert.totalCredits}`;
        });
    }

    output(courses);

    const boxButtons = document.querySelectorAll('.boxButton button');
    boxButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectButton = button.value.toUpperCase();
            document.querySelectorAll('#course').forEach(course => {
                course.style.display = selectButton === 'ALL' || course.dataset.subject === selectButton ? 'block' : 'none';
            });
        });
    });

    
    document.querySelector('.boxButton button[value="all"]').click();
});
document.querySelectorAll('.courseButton').forEach(button => {
    if (button.textContent.includes('WDD')) {
      button.classList.add('wdd');
    }
  });
  