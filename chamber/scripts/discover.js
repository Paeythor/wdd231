const cardsContainer = document.getElementById("discover-cards");
const messageEl = document.querySelector(".last-visit-message");

async function loadDiscoverData() {
  try {
    const response = await fetch("data/discover.json");
    if (!response.ok) throw new Error("Failed to load data");

    const data = await response.json();
    displayCards(data.items); // ✅ FIX: access the "items" array
  } catch (error) {
    cardsContainer.innerHTML = `<p>Error loading data.</p>`;
    console.error("Data fetch error:", error);
  }
}

function displayCards(items) {
  cardsContainer.innerHTML = "";

  items.forEach((item) => {
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

    cardsContainer.appendChild(card);
  });
}

function showLastVisitMessage() {
  const now = Date.now();
  const lastVisit = localStorage.getItem("lastVisit");
  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const diffMs = now - Number(lastVisit);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
      message = "Back so soon! Awesome!";
    } else {
      message = `You last visited ${diffDays} ${diffDays === 1 ? "day" : "days"} ago.`;
    }
  }

  messageEl.textContent = message;
  localStorage.setItem("lastVisit", now);
}

document.addEventListener("DOMContentLoaded", () => {
  loadDiscoverData();
  showLastVisitMessage();
});
