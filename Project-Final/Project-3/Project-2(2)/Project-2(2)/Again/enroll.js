document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const courseTitle = params.get('course');
    if (courseTitle) {
        document.getElementById('course-title').value = courseTitle;
    }

    document.getElementById('enrollForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('sName').value;
        const email = document.getElementById('sEmail').value;

    });
});

document.getElementById('enrollForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const courseStartDates = {
        "Higher Certificate": new Date("2024-09-01"),
        "Diploma": new Date("2024-10-01"),
        "BIT": new Date("2024-11-01"),
        "BCOM": new Date("2024-12-01")
    };

    const course = document.getElementById('courseSelect').value;
    const startDate = courseStartDates[course];

    const now = new Date();
    const timeDifference = startDate - now;

    if (timeDifference <= 0) {
        document.getElementById('message').innerHTML = "You cannot enroll for this specific course as it is already in progress.";
        return;
    }

    const countdownInterval = setInterval(function() {
        const now = new Date();
        const timeDifference = startDate - now;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('message').innerHTML = "This course is already in progress.";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        

        document.getElementById('message').innerHTML = 
      
            `Congratulations, you have been successfuly enrolled in the course! <br> <b>${course}<b> will begin in : ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
            
    }, 1000);
});
