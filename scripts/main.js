document.addEventListener("DOMContentLoaded", function () {
    // Set current year and last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

    // Hamburger menu functionality
    const hamburger = document.getElementById("hamburger"); // Select the hamburger button
    const navLinks = document.getElementById("nav-links");  // Select the navigation menu
    const menuItems = document.querySelectorAll(".nav-link"); // Select all nav links
    const currentLocation = window.location.href; // Get current page URL

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰";
        });
    }

    // Highlight active page
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add("active");
        }
    });

    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
            technology: [
                'HTML',
                'CSS'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: [
                'C#'
            ],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: false
        }
    ]``

    const container = document.getElementById("third-container-i");
    const courseCountDisplay = document.getElementById("course-count");

    // Function to display courses
    function displayCourses(filter) {
        container.innerHTML = ""; // Clear container
        let filteredCourses = courses;

        if (filter !== "All") {
            filteredCourses = courses.filter(course => course.subject === filter);
        }

        // Count the courses and display count
        const courseCount = filteredCourses.length;
        courseCountDisplay.textContent = `Total ${filter} Courses: ${courseCount}`;

        // Create a grid container
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");

        filteredCourses.forEach(course => {
            const courseElement = document.createElement("div");
            courseElement.textContent = `${course.subject} ${course.number}`;
            courseElement.classList.add("course-card");

            // Apply different styles if course is completed
            if (course.completed) {
                courseElement.classList.add("completed");
            }

            gridContainer.appendChild(courseElement);
        });

        container.appendChild(gridContainer);
    }

    // Event listeners for course filter buttons
    document.getElementById("all-btn").addEventListener("click", () => displayCourses("All"));
    document.getElementById("cse-btn").addEventListener("click", () => displayCourses("CSE"));
    document.getElementById("wdd-btn").addEventListener("click", () => displayCourses("WDD"));

    // Initial display of all courses
    displayCourses("All");
});
