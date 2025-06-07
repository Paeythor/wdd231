const spotlightContainer = document.querySelector('.spotlight-cards');

async function getMemberData() {
  const response = await fetch('data/members.json');
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
  spotlightContainer.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p><strong>Membership:</strong> ${member.membershipLevel === 3 ? 'Silver' : 'Gold'}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
    `;

    spotlightContainer.appendChild(card);
  });
}

getMemberData()
  .then(filterGoldSilver)
  .then(filtered => {
    const spotlights = getRandomSpotlights(filtered, 2 + Math.floor(Math.random() * 2)); // 2 or 3
    displaySpotlights(spotlights);
  })
  .catch(error => {
    console.error('Error loading member spotlights:', error);
    spotlightContainer.innerHTML = '<p>Unable to load spotlights.</p>';
  });
