// Show the modal when the page loads only if it hasn't been shown before in this session
window.onload = function () {
  const modal = document.getElementById('popupModal');
  const closeModal = document.getElementById('closeModal');
  const cancelBtn = document.getElementById('cancelBtn');

  // Check if the modal has already been shown
  if (!localStorage.getItem('modalShown')) {
    modal.style.display = "block"; // Display modal if not shown before

    // Mark the modal as shown in localStorage
    localStorage.setItem('modalShown', 'true');
  }

  // Close the modal when the user clicks on the close button (X)
  closeModal.onclick = function () {
    modal.style.display = "none";
  }

  // Close the modal when the user clicks on the cancel button
  cancelBtn.onclick = function () {
    modal.style.display = "none";
  }

  // Close the modal if the user clicks outside of the modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
