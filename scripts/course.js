// Update last modified date and current year
document.getElementById("lastModified").innerHTML = document.lastModified;

const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// Course data
const courses = [
  { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.', technology: ['Python'], inProgress: false, completed: true },
  { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.', technology: ['HTML', 'CSS'], inProgress: true, completed: false },
  { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: 'Learn functions, debugging, and how to write organized code.', technology: ['Python'], inProgress: false, completed: true },
  { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: 'Learn OOP, encapsulation, inheritance, and polymorphism.', technology: ['C#'], inProgress: false, completed: true },
  { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'Build dynamic websites with JavaScript.', technology: ['HTML', 'CSS', 'JavaScript'], inProgress: false, completed: true },
  { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: 'Focus on UX, performance optimization, and APIs.', technology: ['HTML', 'CSS', 'JavaScript'], inProgress: true, completed: false },
  { subject: 'ITM', number: 111, title: 'Introduction to Databases', credits: 3, certificate: 'Web Development', description: 'This course covers the basic elements of database management systems. It introduces students to the concepts of logical and physical relationships in a data model and the concepts of inner and outer joins. Students will use a computer aided software engineering (CASE) tool to design, create, and query a database.', technology: ['Data Base', 'MySQL'], inProgress: false, completed: true },
  { subject: 'WDD', number: 330, title: 'Web Frontend Development II', credits: 3, certificate: 'Web Development', description: 'TThis course will continue with the topics presented in WDD 231 Web Front-end Development I: Building websites with HTML, CSS, and Javascript. This course will have a stronger emphasis on Javascript development and mobile design as students create mobile web applications.', technology: ['HTML', 'CSS', 'JavaScript'], inProgress: false, completed: false },
  { subject: 'CSE', number: 340, title: 'Web Backend Development', credits: 3, certificate: 'Web Development', description: 'This programming course focuses on constructing dynamic web sites using server-side languages, making use of databases and design patterns. The concepts introduced in Web Frontend Development courses are expected to be continued and implemented.', technology: ['Server Side'], inProgress: false, completed: false },
  { subject: 'CSE', number: 341, title: 'Web Services', credits: 3, certificate: 'Web Development', description: 'This course focuses on the backend development of dynamic, service-oriented web applications.', technology: ['Server Side'], inProgress: false, completed: false },
  { subject: 'WDD', number: 430, title: 'Web Full-Stack Development', credits: 3, certificate: 'Web Development', description: 'This course will teach you how to design and build interactive web based applications using HTML, CSS, JavaScript, and a web development stack.', technology: ['Server Side'], inProgress: false, completed: false },
  { subject: 'CSE', number: 212, title: 'Programming w/Data Struct', credits: 2, certificate: 'Software Development', description: 'This course will introduce students to the common programming data structures with an emphasis on how to use them to solve practical, real-world problems.', technology: ['.NET', 'C#'], inProgress: false, completed: false },
  { subject: 'CSE', number: 270, title: 'Software Testing', credits: 3, certificate: 'Software Development', description: 'Software Testing is a systematic process of verifying requirements and design elements, features, or standards against the implementation to increase product success. The verification process uses a set of test paths starting from the minor units up to the entire deliverable system using predetermined or live data to build confidence that the product works right (as specified). CSE 270 will explore testing standards, techniques, tools, and cases.', technology: ['Software Testing'], inProgress: false, completed: false },
  { subject: 'CSE', number: 300, title: 'Professional Readiness', credits: 1, certificate: 'Software Development', description: 'This course will help prepare students to be professionals in their major by completing activities that will provide professional connections, confidence, and employability.', technology: [], inProgress: false, completed: false },
  { subject: 'CSE', number: 310, title: 'Applied Programming', credits: 3, certificate: 'Software Development', description: 'This course will teach students to work in teams on large projects using new technology on self-defined projects. The class will simulate real-word programming projects with the aim of producing workable solutions that have potential impact.', technology: [], inProgress: false, completed: false },
  { subject: 'CSE', number: 325, title: '.NET Software Development', credits: 3, certificate: 'Software Development', description: "This course leverages a student's fundamental software development and core web technology background with the Microsoft .NET framework with C# using the Visual Studio Integrated Development Environment. Students will build upon a C# foundation using the ASP.NET framework to design and develop scalable, standards-based web sites, applications, and services using contemporary methodologies and established design patterns. Team work and programming deliverables will be required.", technology: [], inProgress: false, completed: false },
  { subject: 'CSE', number: 370, title: 'Software Eng. Principles', credits: 2, certificate: 'Software Development', description: 'Students learn to analyze and make decisions in software projects through all phases of the software development lifecycle, including requirements elicitation, design, testing, verification, and maintenance.', technology: [], inProgress: false, completed: false }
];


// Function to render courses
function renderCourses() {
    const certificateContainers = {
        "Web and Computer Programming": document.getElementById("courses-web-computer-programming"),
        "Web Development": document.getElementById("courses-web-development"),
        "Software Development": document.getElementById("courses-software-development")
    };

    // Clear any existing buttons
    for (let container of Object.values(certificateContainers)) {
        container.innerHTML = '';
    }

    // Loop through courses and create buttons
    courses.forEach(course => {
        const btn = document.createElement("button");
        btn.textContent = `${course.subject} ${course.number}`;

        // Assign classes based on course status and subject
        btn.classList.add("course", course.subject);
        if (course.completed) {
            btn.classList.add("completed");
        } else if (course.inProgress) {
            btn.classList.add("in-progress");
        } else {
            btn.classList.add("not-completed");
        }

        // Add double-click event to show course info
        btn.addEventListener("dblclick", () => showCourseInfo(course));

        const container = certificateContainers[course.certificate];
        if (container) {
            container.appendChild(btn);
        }
    });
}

// Filter only the specified certificate's courses
function filterCourses(filter, containerId) {
    const container = document.getElementById(containerId);
    const buttons = container.querySelectorAll(".course");

    buttons.forEach(btn => {
        if (filter === 'all' || btn.classList.contains(filter)) {
            btn.style.display = 'inline-block';
        } else {
            btn.style.display = 'none';
        }
    });
}

// Show course info in the corresponding card box
function showCourseInfo(course) {
    const infoBoxMap = {
        "Web and Computer Programming": "course-info-web-computer-programming",
        "Web Development": "course-info-web-development",
        "Software Development": "course-info-software-development"
    };

    const infoBoxId = infoBoxMap[course.certificate];
    const infoBox = document.getElementById(infoBoxId);

    if (infoBox) {
        let status = "Not Started";
        if (course.completed) {
            status = "Completed";
        } else if (course.inProgress) {
            status = "In Progress";
        }

        infoBox.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
            <p><strong>Status:</strong> ${status}</p>
        `;
    }
}

// Render courses on page load
renderCourses();
