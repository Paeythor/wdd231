document.addEventListener('DOMContentLoaded', () => {
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
  } else {
    console.error("lastModified element not found");
  }

  const currentYearElement = document.getElementById("currentyear");
  if (currentYearElement) {
    const currentYear = new Date().getFullYear();
    currentYearElement.innerHTML = `<span class="highlight">${currentYear}</span>`;
  } else {
    console.error("currentYear element not found");
  }

  const hamburger = document.querySelector('.hamburger');
  const navigation = document.querySelector('.navigation');
  if (hamburger && navigation) {
    hamburger.addEventListener('click', () => {
      navigation.classList.toggle('open');
    });
  } else {
    console.error("Hamburger or navigation element not found");
  }
  
  // Lazy loading
  if (!('loading' in HTMLImageElement.prototype)) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
            observer.unobserve(img);
          }
        });
      });
  
      lazyImages.forEach(img => {
        if (!img.dataset.src && img.src.includes("Project/images/WoTArt/")) {
          img.dataset.src = img.src;
          img.removeAttribute('src');
        }
        if (!img.dataset.srcset && img.srcset && img.srcset.includes("Project/images/WoTArt/")) {
          img.dataset.srcset = img.srcset;
          img.removeAttribute('srcset');
        }
        observer.observe(img);
      });
    } else {
      lazyImages.forEach(img => {
        if (img.src.includes("Project/images/WoTArt/")) {
          img.src = img.dataset.src || img.src;
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
        }
      });
    }
  }
});
