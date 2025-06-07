const spotlightContainer = document.querySelector('.spotlight-cards');

async function getMemberData() {
  const response = await fetch('data/members.json');
  if (!response.ok) throw new Error('Unable to fetch member data');
  const data = await response.json();
  return data;
}

function filterGoldSilver(members) {
  return members.filter(member =>
    member.membershipLevel === 2 || member.membershipLevel === 3
  );
}

function getRandomSpotlights(members, count = 3) {
  const shuffled = members.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displaySpotlights(members) {
  // Create one container card
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('business-card'); // reuse your CSS class

  members.forEach(member => {
    const item = document.createElement('div');
    item.classList.add('business-item'); // for inner layout

    item.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    cardContainer.appendChild(item);
  });

  // Clear and append one card with 3 items inside
  spotlightContainer.innerHTML = '';
  spotlightContainer.appendChild(cardContainer);
}

getMemberData()
  .then(filterGoldSilver)
  .then(filtered => {
    const spotlights = getRandomSpotlights(filtered, 3);
    displaySpotlights(spotlights);
  })
  .catch(error => {
    console.error('Error loading member spotlights:', error);
    spotlightContainer.innerHTML = '<p>Unable to load spotlight businesses.</p>';
  });
