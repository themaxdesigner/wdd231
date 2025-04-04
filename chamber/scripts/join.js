// Set timestamp for the form submission
document.getElementById("timestamp").value = new Date().toLocaleString();

// Show Modal Function
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
}

// Close Modal Function
function closeModal() {
    const modals = document.querySelectorAll('.membership-modal');
    modals.forEach(modal => modal.style.display = 'none');
}
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburgerElement.addEventListener('click', () => {
navElement.classList.toggle('open');
hamburgerElement.classList.toggle('open');


});


// Set last modified date
document.getElementById("lastModified").innerText = document.lastModified;
