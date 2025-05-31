async function loadSpotlights() {
  const response = await fetch('data/members.json');
  const data = await response.json();

  const goldSilver = data.members.filter(m => m.membership === "Gold" || m.membership === "Silver");
  const shuffled = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

  const container = document.getElementById('spotlight-container');
  shuffled.forEach(member => {
    const card = document.createElement('div');
    card.className = 'spotlight-card';
    card.innerHTML = `
      <img src="images/${member.logo}" alt="${member.name} logo" width="100">
      <div>
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Site</a>
        <p><strong>${member.membership} Member</strong></p>
      </div>
    `;
    container.appendChild(card);
  });
}

loadSpotlights();
