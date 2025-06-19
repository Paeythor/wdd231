document.addEventListener('DOMContentLoaded', () => {
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = document.lastModified;
  }

  const today = new Date();
  const year = document.querySelector("#currentyear");
  if (year) {
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
  }

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navigation = document.querySelector('.navigation');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  if (hamburger && navigation) {
    hamburger.addEventListener('click', () => {
      navigation.classList.toggle('open');
    });
  }

  const themeToggleBtn = document.querySelector('nav button.theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      themeToggleBtn.classList.toggle('active');
      localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggleBtn.classList.add('active');
    }
  }

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const roles = form.querySelectorAll('input[name="roles"]:checked');
      if (roles.length === 0) {
        alert('Please select at least one role in the Tower.');
        e.preventDefault();
        return;
      }

      const commitment = form.querySelector('#waivertxt')?.value.trim();
      if (!commitment || commitment.length < 10) {
        alert('Please provide a meaningful commitment (at least 10 characters).');
        e.preventDefault();
        return;
      }
    });
  }

  const wheelOfTimeBooks = [
    { number: "0", title: "New Spring", author: "Robert Jordan", releaseDate: "6 January 2004", coverImage: "images/wot00_newspring.jpg" },
    { number: 1, title: "The Eye of the World", author: "Robert Jordan", releaseDate: "15 January 1990", coverImage: "images/wot01_theeyeoftheworld.jpg" },
    { number: 2, title: "The Great Hunt", author: "Robert Jordan", releaseDate: "15 November 1990", coverImage: "images/wot02_thegreathunt.jpg" },
    { number: 3, title: "The Dragon Reborn", author: "Robert Jordan", releaseDate: "15 October 1991", coverImage: "images/wot03_thedragonreborn.jpg" },
    { number: 4, title: "The Shadow Rising", author: "Robert Jordan", releaseDate: "15 September 1992", coverImage: "images/wot04_theshadowrising.jpg" },
    { number: 5, title: "The Fires of Heaven", author: "Robert Jordan", releaseDate: "15 October 1993", coverImage: "images/wot05_thefiresofheaven.jpg" },
    { number: 6, title: "Lord of Chaos", author: "Robert Jordan", releaseDate: "15 October 1994", coverImage: "images/wot06_lordofchaos.jpg" },
    { number: 7, title: "A Crown of Swords", author: "Robert Jordan", releaseDate: "15 May 1996", coverImage: "images/wot07_acrownofswords.jpg" },
    { number: 8, title: "The Path of Daggers", author: "Robert Jordan", releaseDate: "20 October 1998", coverImage: "images/wot08_thepathofdaggers.jpg" },
    { number: 9, title: "Winter's Heart", author: "Robert Jordan", releaseDate: "7 November 2000", coverImage: "images/wot09_wintersheart.jpg" },
    { number: 10, title: "Crossroads of Twilight", author: "Robert Jordan", releaseDate: "7 January 2003", coverImage: "images/wot10_crossroadsoftwilight.jpg" },
    { number: 11, title: "Knife of Dreams", author: "Robert Jordan", releaseDate: "11 October 2005", coverImage: "images/wot11_knifeofdreams.jpg" },
    { number: 12, title: "The Gathering Storm", author: "Robert Jordan and Brandon Sanderson", releaseDate: "27 October 2009", coverImage: "images/wot12_thegatheringstorm.jpg" },
    { number: 13, title: "Towers of Midnight", author: "Robert Jordan and Brandon Sanderson", releaseDate: "2 November 2010", coverImage: "images/wot13_towersofmidnight.jpg" },
    { number: 14, title: "A Memory of Light", author: "Robert Jordan and Brandon Sanderson", releaseDate: "8 January 2013", coverImage: "images/wot14_amemoryoflight.jpg" }
  ];

  const bookDetails = {
  "New Spring": "New Spring is a prequel to the Wheel of Time series, detailing events that happen before the main story...",
  "The Eye of the World": "The Eye of the World is the first book of the Wheel of Time series, where Rand al'Thor begins his journey...",
  "The Great Hunt": "The Great Hunt continues Rand's journey as the hunt for the Horn of Valere begins, introducing deeper prophecies and escalating conflicts.",
  "The Dragon Reborn": "In The Dragon Reborn, Rand steps into his destiny, while his friends face their own perilous paths.",
  "The Shadow Rising": "The Shadow Rising expands the world dramatically, exploring Aiel culture and ancient prophecies.",
  "The Fires of Heaven": "The Fires of Heaven explores betrayal, loss, and powerful confrontations as the war against the Forsaken escalates.",
  "Lord of Chaos": "Lord of Chaos sees Rand consolidate power—but at a heavy personal cost, leading to one of the series’ most intense climaxes.",
  "A Crown of Swords": "A Crown of Swords features political intrigue and the emergence of deadly threats in the city of Ebou Dar.",
  "The Path of Daggers": "The Path of Daggers follows Rand's war against the Seanchan and the continued unraveling of the Pattern.",
  "Winter's Heart": "Winter's Heart features Rand's attempt to cleanse the male half of the One Power, a pivotal moment in the series.",
  "Crossroads of Twilight": "Crossroads of Twilight unfolds mostly alongside events from Winter's Heart, showing the consequences of Rand's actions.",
  "Knife of Dreams": "Knife of Dreams wraps up several long-running plotlines as war and prophecy converge.",
  "The Gathering Storm": "The Gathering Storm, co-written with Brandon Sanderson, shows Rand’s descent into darkness and Egwene’s stand against tyranny.",
  "Towers of Midnight": "Towers of Midnight follows Perrin’s trials, Mat’s preparations, and the last steps toward Tarmon Gai’don.",
  "A Memory of Light": "A Memory of Light concludes the saga with the Last Battle, where all threads are tied in an epic finale."
  };


  const modal = document.getElementById('bookModal');       
  const modalTitle = document.getElementById('modalTitle'); 
  const modalDesc = document.getElementById('modalDesc'); 
  const modalCloseBtn = document.getElementById('modalCloseBtn');


  document.querySelectorAll('.book-gallery .card img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const bookName = img.nextElementSibling.textContent;
      modalTitle.textContent = bookName;
      modalDesc.textContent = bookDetails[bookName] || "No details available.";
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      modalCloseBtn.focus();
    });
  });

  modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  const nationalitySelect = document.getElementById('nationality');
  const loreDiv = document.getElementById('nationality-lore');

  const loreTexts = {
    aiel: "The Aiel are fierce desert warriors, living in the Aiel Waste, with strict codes of honor.",
    andor: "Andor is a powerful kingdom ruled by the royal House Trakand, with a capital at Caemlyn.",
    arafell: "Arafell is a fertile, peaceful kingdom known for its agriculture and skilled archers.",
    cairhien: "Cairhien is famous for its political intrigue and the deadly Game of Houses.",
    shienar: "Shienar is a militarized border nation, defending the Westlands from threats beyond the Blight.",
    tarabon: "Tarabon is a coastal kingdom known for its merchants and naval strength.",
    tear: "Tear is a wealthy port city and kingdom, home to the great Stone of Tear fortress.",
    seanchan: "Seanchan are a distant empire with a rigid social hierarchy and powerful channelers known as damane.",
    tar_valon: "Tar Valon is the island city where the White Tower stands, home of the Aes Sedai.",
    illian: "Illian is a coastal kingdom known for its festivals and skilled swordsmen.",
    murandy: "Murandy is a small, warlike country caught between larger powers.",
    ghealdan: "Ghealdan is a troubled kingdom recently recovering from wars and civil unrest.",
    far_madding: "Far Madding is a secretive city whose borders are protected by powerful wards.",
    toman_head: "Toman Head is a rocky peninsula region famous for its fishermen and coastal communities.",
    kandor: "Kandor is a small nation often overshadowed by larger neighbors but proud of its heritage."
  };

  if (nationalitySelect && loreDiv) {
    nationalitySelect.addEventListener('change', () => {
      const selected = nationalitySelect.value;
      loreDiv.textContent = loreTexts[selected] || '';
    });
  }

  const commentForm = document.getElementById('comment-form');
  const commentsContainer = document.getElementById('comments-container');

  if (commentForm && commentsContainer) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = commentForm.username.value.trim();
      const comment = commentForm.comment.value.trim();

      if (!username || !comment) return;

      const commentElem = document.createElement('div');
      commentElem.classList.add('comment');

      const now = new Date();
      const timestamp = now.toLocaleString();

      commentElem.innerHTML = `
        <p><strong>${sanitizeHTML(username)}</strong> <em>(${timestamp})</em></p>
        <p>${sanitizeHTML(comment)}</p>
        <hr>
      `;

      commentsContainer.appendChild(commentElem);
      commentsContainer.scrollTop = commentsContainer.scrollHeight;

      commentForm.reset();
    });

    function sanitizeHTML(str) {
      const temp = document.createElement('div');
      temp.textContent = str;
      return temp.innerHTML;
    }
  }

  function createBookCard(bookList) {
    const gallery = document.getElementById('book-gallery');
    if (!gallery) return;

    gallery.innerHTML = '';

    bookList.forEach(book => {
      const card = document.createElement("section");

      const title = document.createElement("h3");
      title.textContent = book.title;

      const author = document.createElement("p");
      author.innerHTML = `<span class="label">Author:</span> ${book.author}`;

      const releaseDate = document.createElement("p");
      releaseDate.innerHTML = `<span class="label">Released:</span> ${book.releaseDate}`;

      const img = document.createElement("img");
      img.setAttribute("data-src", book.coverImage);
      img.setAttribute("alt", `${book.title} Cover`);
      img.setAttribute("loading", "lazy");
      img.classList.add("lazy");

      img.onerror = () => {
        const fallbackPath = `images/book-covers/${book.title.toLowerCase().replace(/ /g, '-')}.jpg`;
        img.setAttribute("data-src", fallbackPath);
      };

      card.appendChild(title);
      card.appendChild(author);
      card.appendChild(releaseDate);
      card.appendChild(img);

      gallery.appendChild(card);
    });

    const lazyImages = document.querySelectorAll('.lazy');

    const lazyLoad = (image) => {
      const src = image.getAttribute('data-src');
      if (src && !image.getAttribute('src')) {
        image.setAttribute('src', src);
        image.classList.remove('lazy');
      }
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lazyLoad(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  }

  createBookCard(wheelOfTimeBooks);
});
