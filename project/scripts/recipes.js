const recipesContainer = document.querySelector('#recipe-list');

async function loadRecipes() {
  try {
    const response = await fetch('data/recipes.json');
    const recipes = await response.json();

    recipes.forEach(recipe => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <p><strong>Calories:</strong> ${recipe.calories}</p>
        <p><strong>Prep Time:</strong> ${recipe.time}</p>
      `;
      recipesContainer.appendChild(card);
    });
  } catch (error) {
    recipesContainer.innerHTML = `<p>Error loading recipes.</p>`;
    console.error(error);
  }
}

loadRecipes();
