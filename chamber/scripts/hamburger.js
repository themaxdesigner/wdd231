const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Set copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


