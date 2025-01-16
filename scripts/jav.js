document.addEventListener("DOMContentLoaded", function() {
    // Set current year and last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger'); // Select the hamburger button
    const nav = document.querySelector('nav');              // Select the nav element
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
        hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰";
    });

    // Courses array
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming...',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web...',
            technology: ['HTML', 'CSS'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized...',
            technology: ['Python'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes...',
            technology: ['C#'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        }
    ];

    // Function to display courses
    function displayCourses(coursesToDisplay) {
        const courseContainer = document.getElementById("courses-container");
        courseContainer.innerHTML = ''; // Clear existing courses

        let totalCredits = 0; // Total credits variable

        coursesToDisplay.forEach(course => {
            totalCredits += course.credits;
            const courseCard = document.createElement("div");
            courseCard.classList.add("course-card");
            if (course.completed) {
                courseCard.classList.add("completed");
            }

            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p><strong>Subject:</strong> ${course.subject}</p>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Certificate:</strong> ${course.certificate}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
            `;

            courseContainer.appendChild(courseCard);
        });

        // Display the total credits
        document.getElementById("total-credits").textContent = `Total Credits: ${totalCredits}`;
    }

    // Filter buttons
    document.getElementById("show-all").addEventListener("click", () => displayCourses(courses));
    document.getElementById("show-wdd").addEventListener("click", () => {
        const wddCourses = courses.filter(course => course.subject === 'WDD');
        displayCourses(wddCourses);
    });
    document.getElementById("show-cse").addEventListener("click", () => {
        const cseCourses = courses.filter(course => course.subject === 'CSE');
        displayCourses(cseCourses);
    });

    // Initial display (all courses)
    displayCourses(courses);
});
