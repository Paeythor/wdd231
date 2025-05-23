// Load the JSON data and render it
fetch('members.json')
  .then(response => response.json())
  .then(data => renderDirectory(data))
  .catch(error => console.error("Error loading the directory data:", error));

// Render cards into the #directory container
function renderDirectory(data) {
  const directoryContainer = document.getElementById('directory');
  directoryContainer.innerHTML = '';

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('directory-card');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;

    const content = document.createElement('div');
    content.classList.add('card-content');

    const title = document.createElement('h3');
    title.textContent = item.name;

    const description = document.createElement('p');
    description.textContent = item.description;

    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = "Visit Website";
    link.target = "_blank";
    link.classList.add('card-link');

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(link);

    card.appendChild(img);
    card.appendChild(content);

    directoryContainer.appendChild(card);
  });
}


const gridBtn = document.getElementById('toggle-grid');
const listBtn = document.getElementById('toggle-list');
const directory = document.getElementById('directory');

gridBtn.addEventListener('click', () => {
  directory.classList.add('grid-view');
  directory.classList.remove('list-view');
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
  directory.classList.add('list-view');
  directory.classList.remove('grid-view');
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
});


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
