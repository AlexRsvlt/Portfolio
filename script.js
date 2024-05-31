

function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.tab[onclick="filterProjects('${category}')"]`).classList.add('active');
    
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('Full Name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form submitted with the following details:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can add more code here to handle the form submission,
    // such as sending the data to a server or displaying a success message.
});


/*
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
}); */