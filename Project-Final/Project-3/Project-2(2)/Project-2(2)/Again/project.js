const courses = [
    {
        title: "Bachelor in Computing",
        code: "120079",
        duration: "3 Years",
        description: "Our Bachelor of Computing degree will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.",
        modules: "Web Programming  -  Information Systems  -  Database Development ",
        lecturers: "Mr. S Zengeni - Mr. R Hodd - Ms M Magorimbo",
        venue: "Tswane Campus - Kempton Park Campus - Stellenbosch Campus",

        study: "WPR 281 Study Guide [2024] v1.4.pdf",
        video: "https://www.youtube.com/watch?v=DhrL5xhnsrQ"
    },
    {
        title: "Bachelor in Information Technology",
        code: "2703550",
        duration: "3 Years",
        description: "This IT degree focuses on information systems modules and will provide you with foundational knowledge in software engineering and business intelligence. You will cover an extensive range of topics, from mobile and wireless networks to artificial intelligence and intelligent systems.",
        modules: "Web Programming  - Information Systems  - Database Development ",
        lecturers: "Mr. S Zengeni - Mr. R Hodd - Ms M Magorimbo",
        venue: "Tswane Campus - Kempton Park Campus - Stellenbosch Campus",

        study: "WPR 281 Study Guide [2024] v1.4.pdf",
        video: "https://www.youtube.com/watch?v=DhrL5xhnsrQ"
    },
    {
        title: "Diploma",
        code: "374022",
        duration: "2 Years",
        description: "Our Diploma in Information Technology consists of a generic foundation phase and a specialisation phase. The foundation phase gives insight into the field of information technology, while the specialisation phase is career-oriented.",
        modules: "Problem Solving  - Programming -  Internet of Things ",
        lecturers: "Mr. S Zengeni - Mr. R Hodd - Ms M Magorimbo",
        venue: "Tswane Campus - Kempton Park Campus - Stellenbosch Campus",
        study: "WPR 281 Study Guide [2024] v1.4.pdf",
        video: "https://www.youtube.com/watch?v=DhrL5xhnsrQ"
    },
    {
        title: "Higher Certificate",
        code: "2933007",
        duration: "1 Year",
        description: "This Higher Certificate in IT is created in line with Belgium Campus’s mission to train young people to understand, use and apply ICT effectively, efficiently and in ethical ways, leading to gainful employment.",
        modules: "Problem Solving  - Programming -  Internet of Things ",
        lecturers: "Mr. S Zengeni - Mr. R Hodd - Ms M Magorimbo",
        venue: "Tswane Campus - Kempton Park Campus - Stellenbosch Campus",
        study: "WPR 281 Study Guide [2024] v1.4.pdf",
        video: "https://www.youtube.com/watch?v=DhrL5xhnsrQ"
    }
];

document.getElementById('searchform').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('searchItem').value.toLowerCase();
    const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchQuery));
    displayCourses(filteredCourses);
});

function displayCourses(courseList) {
    const courseListElement = document.querySelector('.courseList');
    courseListElement.innerHTML = '';
    courseList.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h3>${course.title}</h3>
            <p><b>Code</b>: ${course.code}</p>
            <p><b>Duration</b>: ${course.duration}</p>
            <p>${course.description}</p>
            <div class="button-container">
                <button onclick="viewCourseDetails('${course.code}')">View Details</button>
                <button onclick="enrollCourse('${course.code}')">Enroll</button>
            </div>
        `;
        courseListElement.appendChild(courseElement);
    });
}

function viewCourseDetails(courseCode) {
    const course = courses.find(c => c.code === courseCode);
    if (!course) return;
    const courseDetailContent = document.getElementById('courseInfo');
    courseDetailContent.innerHTML = `
        <h3>${course.title}</h3>
        <table>
            <tr><th>Code</th><td>${course.code}</td></tr>
            <tr><th>Duration</th><td>${course.duration}</td></tr>
            <tr><th>Description</th><td>${course.description}</td></tr>
            <tr><th>Modules</th><td>${course.modules}</td></tr>
            <tr><th>Lecturers</th><td>${course.lecturers}</td></tr>
            <tr><th>Venues</th><td>${course.venue}</td></tr>

            <button onclick="window.open('${course.study}')">Download Study Guide</button>
            <button onclick="window.open('${course.video}')">Watch Video</button>
        </table>
    `
    
    
    ;
    document.getElementById('courseDetails').style.display = 'block';
}

function enrollCourse(courseCode, courseTitle) {
    window.location.href = `enroll.html?course=${encodeURIComponent(courseTitle)}`;
}

function printCourse() {
    window.print();
}

displayCourses(courses);
