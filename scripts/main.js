document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('nav');

    const socialContent = `
        <a href="https://github.com/paeythor" target="_blank" title="GitHub">
            <img class="icon github-logo" src="images/github-mark-white.png" alt="GitHub icon" />
        </a>
        <a href="https://x.com/JacobCSchumann" target="_blank" title="X">
            <img class="icon x-logo" src="images/logo-x-version-white.png" alt="X logo" />
        </a>
        <a href="https://www.linkedin.com/in/jacob-c-schumann" target="_blank" title="LinkedIn">
            <img class="icon linkedin-logo" src="images/linkedin-logo-white.png" alt="LinkedIn icon" />
        </a>
    `;

    hamButton?.addEventListener('click', () => {
        navigation?.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    document.querySelectorAll('.social').forEach(div => {
        div.innerHTML = socialContent;
    });

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
