function showLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function login() {
    alert("Login functionality will be connected to the backend later.");
}

function studentLogin() {
    alert("Student Dashboard coming next!");
}

function academiaLogin() {
    alert("Academia Dashboard coming next!");
}

function industryLogin() {
    alert("Industry Dashboard coming next!");
}

function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

window.onclick = function(event) {
    const modal = document.getElementById("loginModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
}
function openStudentDashboard() {
    window.location.href = "student-dashboard.html";
}
function postJob() {

    const title = document.getElementById("jobTitle").value;
    const company = document.getElementById("companyName").value;
    const location = document.getElementById("jobLocation").value;
    const type = document.getElementById("jobType").value;
    const skills = document.getElementById("jobSkills").value;
    const description = document.getElementById("jobDescription").value;

    if (!title || !company || !location || !type || !skills || !description) {
        alert("Please complete all fields.");
        return;
    }

    const job = {
        title: title,
        company: company,
        location: location,
        type: type,
        skills: skills,
        description: description
    };

    fetch("http://localhost:3000/jobs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to post job");
        }
        return response.json();
    })
    .then(data => {
        alert("🎉 Job Posted Successfully!");
        window.location.href = "industry-dashboard.html";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Job could not be posted. Make sure JSON Server is running.");
    });
}