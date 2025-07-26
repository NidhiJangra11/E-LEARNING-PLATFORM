document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Function to load course data
    function loadCourses() {
        const coursesContainer = document.getElementById('courses-container');
        const courses = [
            {
                title: 'Introduction to Programming',
                description: 'Learn the basics of programming using Python.',
                link: 'courses/python-introduction.html'
            },
            {
                title: 'Web Development Bootcamp',
                description: 'Become a full-stack web developer in this comprehensive course.',
                link: 'courses/web-development.html'
            },
            {
                title: 'Data Science Essentials',
                description: 'Understand the fundamentals of data science and machine learning.',
                link: 'courses/data-science.html'
            }
        ];

        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <a href="${course.link}" class="enroll-button">Enroll Now</a>
            `;
            coursesContainer.appendChild(courseCard);
        });
    }

    // Load courses when the courses page is accessed
    if (document.body.contains(document.getElementById('courses-container'))) {
        loadCourses();
    }
});