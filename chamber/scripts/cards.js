document.addEventListener("DOMContentLoaded", () => {
  const membershipSelect = document.querySelector("select[name='membership']");
  const fnameInput = document.querySelector("input[name='fname']");
  const lnameInput = document.querySelector("input[name='lname']");

  const profileCards = document.querySelectorAll(".card-grid .card");
  const membershipCards = document.querySelectorAll(".membership-cards .card");

  const membershipData = {
    "Non Profit": { level: 3 },
    bronze: { level: 6 },
    silver: { level: 9 },
    gold: { level: 12 }
  };

  function updateCards() {
    const membership = membershipSelect.value;
    const { level } = membershipData[membership] || { level: 0 };
    const fullName = `${fnameInput.value.trim()} ${lnameInput.value.trim()}`.trim() || "New Member";

    document.querySelector(".level-box .level").textContent = `Level ${level}`;

    profileCards.forEach((card, i) => {
      const levels = ["Non Profit", "bronze", "silver"];
      const data = membershipData[levels[i]] || { level: 0 };

      const nameElem = card.querySelector(".name");
      const levelElem = card.querySelector(".level");

      if (i === 0) {
        nameElem.textContent = fullName;
      }

      levelElem.textContent = `Level ${data.level}`;

      card.querySelector(".card-header").classList.remove("bg-level-1", "bg-level-2", "bg-level-3");
      card.querySelector(".card-header").classList.add(`bg-level-${i + 1}`);
    });
  }

  membershipSelect.addEventListener("change", updateCards);
  fnameInput.addEventListener("input", updateCards);
  lnameInput.addEventListener("input", updateCards);

  updateCards();

  membershipCards.forEach((card, index) => {
    card.style.animation = `riseUp 0.5s ease-out forwards`;
    card.style.animationDelay = `${index * 0.3}s`;
  });
});
