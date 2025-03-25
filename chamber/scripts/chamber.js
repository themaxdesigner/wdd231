
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburgerElement.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburgerElement.classList.toggle('open');
  

});

document.addEventListener("DOMContentLoaded", () => {
    const gridViewBtn = document.getElementById("gridView");
    const listViewBtn = document.getElementById("listView");
    const businessList = document.getElementById("business-list");

    // Function to fetch and display data
    async function fetchBusinesses(viewType) {
        try {
            const response = await fetch("data/members.json");
            const businesses = await response.json();
            
            businessList.innerHTML = ""; // Clear previous content

            businesses.forEach(business => {
                const card = document.createElement("div");
                card.classList.add("business-card");
                
                if (viewType === "grid") {
                    card.innerHTML = `
                        <img src="${business.image}" alt="${business.name}">
                        <div class="business-info">
                            <p><strong>${business.name}</strong></p>
                            <p>${business.address}</p>
                            <a href="${business.website}" class="visit-btn" target="_blank">Visit</a>
                        </div>
                    `;
                } else {
                    card.innerHTML = `
                        <div class="business-info">
                            <p><strong>${business.name}</strong></p>
                            <p>${business.address}</p>
                            <p>Phone: ${business.phone}</p>
                            <a href="${business.website}" class="visit-btn" target="_blank">Visit</a>
                        </div>
                    `;
                }

                businessList.appendChild(card);
            });

            businessList.className = viewType === "grid" ? "grid-view" : "list-view";

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Initial Load
    fetchBusinesses("grid");

    // Toggle Views
    gridViewBtn.addEventListener("click", () => {
        fetchBusinesses("grid");
        gridViewBtn.classList.add("active");
        listViewBtn.classList.remove("active");
    });

    listViewBtn.addEventListener("click", () => {
        fetchBusinesses("list");
        listViewBtn.classList.add("active");
        gridViewBtn.classList.remove("active");
    });
});
