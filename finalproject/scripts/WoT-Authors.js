document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("lastModified").textContent = document.lastModified;

    const today = new Date();
    const year = document.querySelector("#currentyear");
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    hamburger.addEventListener('click', () => {
        navigation.classList.toggle('open');
    });

    const wheelOfTimeBooks = [
        { number: "0", title: "New Spring", author: "Robert Jordan", releaseDate: "6 January 2004", coverImage: "images/Wot-Books/WoT00_NewSpring.jpg" },
        { number: 1, title: "The Eye of the World", author: "Robert Jordan", releaseDate: "15 January 1990", coverImage: "images/Wot-Books/WoT01_TheEyeoftheWorld.jpg" },
        { number: 2, title: "The Great Hunt", author: "Robert Jordan", releaseDate: "15 November 1990", coverImage: "images/Wot-Books/WoT02_TheGreatHunt.jpg" },
        { number: 3, title: "The Dragon Reborn", author: "Robert Jordan", releaseDate: "15 October 1991", coverImage: "images/Wot-Books/WoT03_TheDragonReborn.jpg" },
        { number: 4, title: "The Shadow Rising", author: "Robert Jordan", releaseDate: "15 September 1992", coverImage: "images/Wot-Books/WoT04_TheShadowRising.jpg" },
        { number: 5, title: "The Fires of Heaven", author: "Robert Jordan", releaseDate: "15 October 1993", coverImage: "images/Wot-Books/WoT05_TheFiresofHeaven.jpg" },
        { number: 6, title: "Lord of Chaos", author: "Robert Jordan", releaseDate: "15 October 1994", coverImage: "images/Wot-Books/WoT06_LordofChaos.jpg" },
        { number: 7, title: "A Crown of Swords", author: "Robert Jordan", releaseDate: "15 May 1996", coverImage: "images/Wot-Books/WoT07_ACrownofSwords.jpg" },
        { number: 8, title: "The Path of Daggers", author: "Robert Jordan", releaseDate: "20 October 1998", coverImage: "images/Wot-Books/WoT08_ThePathofDaggers.jpg" },
        { number: 9, title: "Winter's Heart", author: "Robert Jordan", releaseDate: "7 November 2000", coverImage: "images/Wot-Books/WoT09_WintersHeart.jpg" },
        { number: 10, title: "Crossroads of Twilight", author: "Robert Jordan", releaseDate: "7 January 2003", coverImage: "images/Wot-Books/WoT10_CrossroadsofTwilight.jpg" },
        { number: 11, title: "Knife of Dreams", author: "Robert Jordan", releaseDate: "11 October 2005", coverImage: "images/Wot-Books/WoT11_KnifeofDreams.jpg" },
        { number: 12, title: "The Gathering Storm", author: "Robert Jordan and Brandon Sanderson", releaseDate: "27 October 2009", coverImage: "images/Wot-Books/WoT12_TheGatheringStorm.jpg" },
        { number: 13, title: "Towers of Midnight", author: "Robert Jordan and Brandon Sanderson", releaseDate: "2 November 2010", coverImage: "images/Wot-Books/WoT13_TowersOfMidnight.jpg" },
        { number: 14, title: "A Memory of Light", author: "Robert Jordan and Brandon Sanderson", releaseDate: "8 January 2013", coverImage: "images/Wot-Books/WoT14_AMemoryOfLight.jpg" }
    ];

    function createBookCard(bookList) {
        const gallery = document.getElementById('book-gallery');
        gallery.innerHTML = '';

        bookList.forEach(book => {
            const card = document.createElement("section");
            const title = document.createElement("h3");
            const author = document.createElement("p");
            const releaseDate = document.createElement("p");
            const img = document.createElement("img");

            title.textContent = book.title;
            author.innerHTML = `<span class="label">Author:</span> ${book.author}`;
            releaseDate.innerHTML = `<span class="label">Released:</span> ${book.releaseDate}`;

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
