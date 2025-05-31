document.addEventListener('DOMContentLoaded', () => {
  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }

  const directory = document.getElementById('directory');
  const gridBtn = document.getElementById('toggle-grid');
  const listBtn = document.getElementById('toggle-list');
  let membersCache = null;

  function createImage(src, alt, width = 200, height = 150) {
    const img = document.createElement('img');
    if (!src.startsWith('images/')) {
      src = `images/${src}`;
    }
    img.src = src;
    img.alt = alt;
    img.width = width;
    img.height = height;
    img.onerror = () => {
      img.src = 'images/default.png';
      img.width = width;
      img.height = height;
    };
    return img;
  }

  const fetchMembers = async () => {
    try {
      if (!membersCache) {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Network response was not ok');
        membersCache = await response.json();
      }
      const members = membersCache;

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
        const {
          name = 'No name provided',
          phone = 'No phone listed',
          address = 'No address listed',
          website = '#',
          description = '',
          image = 'images/default.png',
          membershipLevel = 0
        } = member;

        const membershipLabel = membershipLevel === 1 ? 'Standard Member' :
                                membershipLevel === 2 ? 'Silver Member' :
                                membershipLevel === 3 ? 'Gold Member' : 'Unknown';

        const membershipClass = membershipLevel === 1 ? 'standard' :
                                membershipLevel === 2 ? 'silver' :
                                membershipLevel === 3 ? 'gold' : '';

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

          const img = createImage(image, `${name} logo`, 200, 150);
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
    gridBtn.setAttribute('aria-pressed', 'true');
    listBtn.classList.remove('active');
    listBtn.setAttribute('aria-pressed', 'false');
    directory.innerHTML = '';
    fetchMembers();
  });

  listBtn.addEventListener('click', () => {
    directory.classList.add('list-view');
    directory.classList.remove('grid-view');
    listBtn.classList.add('active');
    listBtn.setAttribute('aria-pressed', 'true');
    gridBtn.classList.remove('active');
    gridBtn.setAttribute('aria-pressed', 'false');
    directory.innerHTML = '';
    fetchMembers();
  });

  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;

  fetchMembers();

  window.toggleMenu = toggleMenu;
});
