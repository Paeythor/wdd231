const directory = document.getElementById('directory');

const fetchMembers = async () => {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const members = await response.json();

    members.forEach(member => {
      const name = member.name || 'No name provided';
      const phone = member.phone || 'No phone listed';
      const address = member.address || 'No address listed';
      const website = member.website || member.link || '#';
      const description = member.description || '';
      const image = member.image || member.logo || '';

      
      const card = document.createElement('div');
      card.classList.add('member-card');

      
      if (image) {
        const img = document.createElement('img');
        
        img.src = image.startsWith('images/') ? image : `images/${image}`;
        img.alt = `${name} logo`;
        card.appendChild(img);
      }

      
      const h3 = document.createElement('h3');
      h3.textContent = name;
      card.appendChild(h3);

      
      if (description) {
        const pDesc = document.createElement('p');
        pDesc.textContent = description;
        card.appendChild(pDesc);
      }

      
      const pAddress = document.createElement('p');
      pAddress.textContent = address;
      card.appendChild(pAddress);

      
      const pPhone = document.createElement('p');
      pPhone.textContent = phone;
      card.appendChild(pPhone);

      
      if (website && website !== '#') {
        const a = document.createElement('a');
        a.href = website;
        a.textContent = 'Visit Website';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        card.appendChild(a);
      }

      directory.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching members:', error);
  }
};

fetchMembers();
