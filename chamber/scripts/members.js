document.addEventListener('DOMContentLoaded', () => {
  const directory = document.getElementById('directory');
  const gridBtn = document.getElementById('toggle-grid');
  const listBtn = document.getElementById('toggle-list');

  const fetchMembers = async () => {
    try {
      const response = await fetch('data/members.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const members = await response.json();

      directory.innerHTML = '';

      if (directory.classList.contains('list-view')) {
        const header = document.createElement('div');
        header.classList.add('list-row', 'list-header');

        const headers = ['Name', 'Phone', 'Address', 'Website', 'Description', 'Membership Level'];
        headers.forEach(text => {
          const div = document.createElement('div');
          div.textContent = text;
          header.appendChild(div);
        });

        directory.appendChild(header);
      }

      members.forEach(member => {
        const name = member.name || 'No name provided';
        const phone = member.phone || 'No phone listed';
        const address = member.address || 'No address listed';
        const website = member.website || member.link || '#';
        const description = member.description || '';
        const image = member.image || member.logo || '';
        const level = parseInt(member.membershipLevel) || 0;

        const membershipLabel = level === 1 ? 'Standard Member' :
                                level === 2 ? 'Silver Member' :
                                level === 3 ? 'Gold Member' : 'Unknown';

        const membershipClass = level === 1 ? 'standard' :
                                level === 2 ? 'silver' :
                                level === 3 ? 'gold' : '';

        if (directory.classList.contains('list-view')) {
          const row = document.createElement('div');
          row.classList.add('list-row');
          if (membershipClass) row.classList.add(membershipClass);

          const nameCol = document.createElement('div');
          nameCol.textContent = name;

          const phoneCol = document.createElement('div');
          phoneCol.textContent = phone;

          const addressCol = document.createElement('div');
          addressCol.textContent = address;

          const websiteCol = document.createElement('div');
          const websiteLink = document.createElement('a');
          websiteLink.href = website;
          try {
            const url = new URL(website);
            websiteLink.textContent = url.hostname.replace('www.', '');
          } catch {
            websiteLink.textContent = website;
          }
          websiteLink.target = '_blank';
          websiteLink.rel = 'noopener noreferrer';
          websiteCol.appendChild(websiteLink);

          const descCol = document.createElement('div');
          descCol.textContent = description;

          const levelCol = document.createElement('div');
          levelCol.textContent = membershipLabel;

          row.appendChild(nameCol);
          row.appendChild(phoneCol);
          row.appendChild(addressCol);
          row.appendChild(websiteCol);
          row.appendChild(descCol);
          row.appendChild(levelCol);

          directory.appendChild(row);
        } else {
          const card = document.createElement('div');
          card.classList.add('member-card');
          if (membershipClass) card.classList.add(membershipClass);

          const img = document.createElement('img');
          img.src = image.startsWith('images/') ? image : `images/${image}`;
          img.alt = `${name} logo`;
          img.width = 200;
          img.height = 150;
          card.appendChild(img);

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

          const pLevel = document.createElement('p');
          pLevel.textContent = membershipLabel;
          card.appendChild(pLevel);

          if (website && website !== '#') {
            const a = document.createElement('a');
            a.href = website;
            a.textContent = 'Visit Website';
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            card.appendChild(a);
          }

          directory.appendChild(card);
        }
      });
    } catch (error) {
      console.error('Error fetching members:', error);
      directory.innerHTML = '<p>Failed to load member directory.</p>';
    }
  };

  gridBtn.addEventListener('click', () => {
    directory.classList.add('grid-view');
    directory.classList.remove('list-view');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
    directory.innerHTML = '';
    fetchMembers();
  });

  listBtn.addEventListener('click', () => {
    directory.classList.add('list-view');
    directory.classList.remove('grid-view');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    directory.innerHTML = '';
    fetchMembers();
  });

  fetchMembers();
});
