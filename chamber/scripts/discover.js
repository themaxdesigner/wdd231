// document.addEventListener("DOMContentLoaded", () => {
//   const messageArea = document.getElementById("visit-message");
//   const lastVisit = localStorage.getItem("lastVisit");
//   const now = Date.now();

//   if (!lastVisit) {
//     messageArea.textContent = "Welcome! Let us know if you have any questions.";
//   } else {
//     const daysSince = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
//     if (daysSince === 0) {
//       messageArea.textContent = "Back so soon! Awesome!";
//     } else if (daysSince === 1) {
//       messageArea.textContent = "You last visited 1 day ago.";
//     } else {
//       messageArea.textContent = `You last visited ${daysSince} days ago.`;
//     }
//   }

//   localStorage.setItem("lastVisit", now);

//   // Load the 8 cards from JSON
//   fetch("../data/interest.json")
//     .then(response => response.json())
//     .then(data => {
//       const cardContainer = document.querySelector(".cards");
//       data.forEach(item => {
//         const card = document.createElement("div");
//         card.classList.add("card");
//         card.innerHTML = `
//           <h2>${item.title}</h2>
//           <figure>
//             <img src="${item.image}" alt="${item.title}" loading="lazy" />
//           </figure>
//           <address>${item.address}</address>
//           <p>${item.description}</p>
//           <button>Learn More</button>
//         `;
//         cardContainer.appendChild(card);
//       });
//     })
//     .catch(error => console.error("Error loading JSON:", error));
// });


document.addEventListener("DOMContentLoaded", () => {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  // Check if it's the user's first visit or if the page has been visited before
  if (!lastVisit) {
    alert("Welcome! Let us know if you have any questions.");
  } else {
    const daysSince = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    // Show different messages based on the time since the last visit
    if (daysSince === 0) {
      alert("Back so soon! Awesome!");
    } else if (daysSince === 1) {
      alert("You last visited 1 day ago.");
    } else {
      alert(`You last visited ${daysSince} days ago.`);
    }
  }

  // Store the current date as the last visit
  localStorage.setItem("lastVisit", now);

  // Load the 8 cards from JSON and add them to the page
  fetch("../data/interest.json")
    .then(response => response.json())
    .then(data => {
      const cardContainer = document.querySelector(".cards");
      data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <h2>${item.title}</h2>
          <figure>
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn More</button>
        `;
        cardContainer.appendChild(card);
      });
    })
    .catch(error => console.error("Error loading JSON:", error));
});
