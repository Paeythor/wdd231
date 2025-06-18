import { items } from '../scripts/discover-data.js';

const cardsContainer = document.getElementById("discover-cards");
const messageEl = document.querySelector(".last-visit-message");

function displayCards(items) {
  try {
    
    while (cardsContainer.firstChild) {
      cardsContainer.removeChild(cardsContainer.firstChild);
    }

    
    items.forEach(item => {
      const card = document.createElement("article");
      card.classList.add("card");
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name} photo" width="300" height="200" loading="lazy" />
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button aria-label="Learn more about ${item.name}">Learn More</button>
      `;

      
      card.querySelector('button').addEventListener('click', () => {
        
        console.log(`Button clicked for ${item.name}`);
      });

      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error displaying cards:', error);
  }
}

function showLastVisitMessage() {
  try {
    const now = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");
    let message = "";

    if (!lastVisit) {
      message = "Welcome! Let us know if you have any questions.";
    } else {
      const diffMs = now - Number(lastVisit);
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      message = diffDays < 1 ? "Back so soon! Awesome!" : `You last visited ${diffDays} ${diffDays === 1 ? "day" : "days"} ago.`;
    }

    messageEl.textContent = message;
    localStorage.setItem("lastVisit", now);
  } catch (error) {
    console.error('Error showing last visit message:', error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayCards(items);
  showLastVisitMessage();
});