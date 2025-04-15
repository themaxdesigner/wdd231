import { fetchMembersData, createModal } from './modules.js';

const loadModalBtn = document.getElementById('loadModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const membersList = document.getElementById('members-list');

// Modal events
if (loadModalBtn && modal && closeModalBtn) {
  loadModalBtn.addEventListener('click', () => {
    createModal(modal);
  });
}

// Fetch and display members
if (membersList) {
  fetchMembersData().then(members => {
    members.forEach(member => {
      const memberElement = document.createElement('div');
      memberElement.classList.add('member');
      memberElement.innerHTML = `
        <h3>${member.name}</h3>
        <p>Age: ${member.age}</p>
        <p>Favorite Activity: ${member.activity}</p>
        <p>Email: ${member.email}</p>
      `;
      membersList.appendChild(memberElement);
    });
  });
}
