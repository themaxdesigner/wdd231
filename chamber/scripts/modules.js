// Fetch member data from JSON
export async function fetchMembersData() {
  try {
    const response = await fetch('../data/members.json');
    const data = await response.json();
    return data.members;
  } catch (error) {
    console.error('Error fetching members data:', error);
    return [];
  }
}

// Modal function
export function createModal(modal) {
  modal.style.display = 'block';
  const closeModalBtn = document.getElementById('closeModalBtn');
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none'; 
    }
  });
}
