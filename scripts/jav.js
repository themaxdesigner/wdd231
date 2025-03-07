document.addEventListener("DOMContentLoaded", function () {
    // Set current year and last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

    // Hamburger menu functionality
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const menuItems = document.querySelectorAll(".nav-link");
    const currentLocation = window.location.href;

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

    // Course filtering functionality
    const courses = [
        { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces programming fundamentals.', technology: ['Python'], completed: true },
        { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'Intro to web design and development.', technology: ['HTML', 'CSS'], completed: true },
        { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: 'Learn to write and call functions in Python.', technology: ['Python'], completed: true },
        { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: 'Introduction to object-oriented programming.', technology: ['C#'], completed: true },
        { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'Create dynamic websites with JavaScript.', technology: ['HTML', 'CSS', 'JavaScript'], completed: true },
        { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: 'Focus on UX, accessibility, and APIs.', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
    ];

    const container = document.getElementById("third-container-iv");
    const courseCountDisplay = document.getElementById("course-count");

    // Function to display courses
    function displayCourses(filter) {
        container.innerHTML = ""; // Clear container
        let filteredCourses = courses;

        if (filter !== "All") {
            filteredCourses = courses.filter(course => course.subject === filter);
        }

        // Count and display courses
        const courseCount = filteredCourses.length;
        courseCountDisplay.textContent = `Total ${filter} Courses: ${courseCount}`;

        // Create grid container
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");

        filteredCourses.forEach(course => {
            const courseElement = document.createElement("div");
            courseElement.textContent = `${course.subject} ${course.number}: ${course.title}`;
            courseElement.classList.add("course-card");

            // Apply different styles if course is completed
            if (course.completed) {
                courseElement.classList.add("completed");
            }

            gridContainer.appendChild(courseElement);
        });

        container.appendChild(gridContainer);
    }

    // Event listeners for buttons
    document.getElementById("all-btn").addEventListener("click", () => displayCourses("All"));
    document.getElementById("cse-btn").addEventListener("click", () => displayCourses("CSE"));
    document.getElementById("wdd-btn").addEventListener("click", () => displayCourses("WDD"));

    // Initial display of all courses
    displayCourses("All");
});
