
    
    fetch('data/discover.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('discover-cards');
        data.items.forEach(item => {
          container.innerHTML += `
            <article class="card">
              <h2>${item.name}</h2>
              <figure>
                <img src="${item.image}" alt="${item.name}" width="300" height="200">
              </figure>
              <address>${item.address}</address>
              <p>${item.description}</p>
              <button>Learn More</button>
            </article>
          `;
        });
      });
 