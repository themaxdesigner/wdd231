const tipsContainer = document.querySelector('#tips-container');

async function loadTips() {
  try {
    const response = await fetch('data/tips.json');
    const tips = await response.json();

    tips.forEach(tip => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${tip.title}</h3>
        <p>${tip.description}</p>
      `;
      tipsContainer.appendChild(card);
    });
  } catch (error) {
    tipsContainer.innerHTML = `<p>Unable to load wellness tips.</p>`;
    console.error(error);
  }
}

loadTips();
