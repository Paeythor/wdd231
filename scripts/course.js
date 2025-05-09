// Update last modified date and current year
document.getElementById("lastModified").innerHTML = document.lastModified;

const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// Course data
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce students to programming...', technology: ['Python'], inProgress: false, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces students to the World Wide Web...', technology: ['HTML', 'CSS'], inProgress: true, completed: false },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: 'Learn functions, debugging, and how to write organized code.', technology: ['Python'], inProgress: false, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: 'Learn OOP, encapsulation, inheritance, and polymorphism.', technology: ['C#'], inProgress: false, completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'Build dynamic websites with JavaScript.', technology: ['HTML', 'CSS', 'JavaScript'], inProgress: false, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: 'Focus on UX, performance optimization, and APIs.', technology: ['HTML', 'CSS', 'JavaScript'], inProgress: true, completed: false },
    { subject: 'ITM', number: 111, title: 'Introduction to Databases', credits: 3, certificate: 'Web Development', description: 'This course covers the basic elements of database management systems...', technology: ['Data Base', 'MySQL'], inProgress: false, completed: true },
    { subject: 'WDD', number: 330, title: 'Web Frontend Development II', credits: 3, certificate: 'Web Development', description: 'This course will continue with the topics presented in WDD 231...', technology: ['HTML', 'CSS', 'JavaScript'], inProgress: false, completed: false },
    { subject: 'CSE', number: 340, title: 'Web Backend Development', credits: 3, certificate: 'Web Development', description: 'This programming course focuses on constructing dynamic web sites...', technology: ['Server Side'], inProgress: false, completed: false },
    { subject: 'CSE', number: 341, title: 'Web Services', credits: 3, certificate: 'Web Development', description: 'This course focuses on the backend development of dynamic, service-oriented web applications.', technology: ['Server Side'], inProgress: false, completed: false },
    { subject: 'WDD', number: 430, title: 'Web Full-Stack Development', credits: 3, certificate: 'Web Development', description: 'This course will teach you how to design and build interactive web-based applications...', technology: ['Server Side'], inProgress: false, completed: false },
    { subject: 'CSE', number: 212, title: 'Programming w/Data Struct', credits: 2, certificate: 'Software Development', description: 'This course will introduce students to the common programming data structures...', technology: ['.NET, C#'], inProgress: false, completed: false },
    { subject: 'CSE', number: 270, title: 'Software Testing', credits: 3, certificate: 'Software Development', description: 'Software Testing is a systematic process of verifying requirements...', technology: ['Software Testing'], inProgress: false, completed: false },
    { subject: 'CSE', number: 300, title: 'Professional Readiness', credits: 1, certificate: 'Software Development', description: 'This course will help prepare students to be professionals...', technology: [''], inProgress: false, completed: false },
    { subject: 'CSE', number: 310, title: 'Applied Programming', credits: 3, certificate: 'Software Development', description: 'This course will teach students to work in teams on large projects...', technology: [''], inProgress: false, completed: false },
    { subject: 'CSE', number: 325, title: '.NET Software Development', credits: 3, certificate: 'Software Development', description: 'This course leverages a student’s fundamental software development...', technology: [''], inProgress: false, completed: false },
    { subject: 'CSE', number: 370, title: 'Software Eng. Principles', credits: 2, certificate: 'Software Development', description: 'Students learn to analyze and make decisions in software projects...', technology: [''], inProgress: false, completed: false }
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

        // Assign classes based on course status
        if (course.completed) {
            btn.classList.add("course", "completed");
        } else if (course.inProgress) {
            btn.classList.add("course", "in-progress");
        } else {
            btn.classList.add("course", "not-completed");
        }

        // Add a listener to show course info when clicked
        btn.addEventListener("dblclick", () => showCourseInfo(course));

        const container = certificateContainers[course.certificate];
        if (container) {
            container.appendChild(btn);
        }
    });
}

// Function to filter courses based on status
function filterCourses(type) {
    const buttons = document.querySelectorAll(".courses .course");
    buttons.forEach(btn => {
        if (type === 'all' || btn.classList.contains(type)) {
            btn.style.display = 'inline-block';
        } else {
            btn.style.display = 'none';
        }
    });
}

// Function to show course details when a button is double-clicked
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

// Call this to populate the page
renderCourses();

