// CSS fixes for RELAXED theme for JSON resume page

// https://registry.jsonresume.org/marcinostaszewski?theme=relaxed

(function() {
  const marks = document.querySelectorAll('.marks mark');
  marks.forEach(mark => {
    mark.style.color = '#333';
    mark.style.backgroundColor = '#fff';
  });

const addressSection = document.querySelector('address');
addressSection.outerHTML = `
  <address class="flex">
    <section id="contact">
      <div class="url">
      <img class="icon" alt="E-mail" src="https://cdn.statically.io/gh/tailwindlabs/heroicons/master/src/24/outline/envelope.svg">
      <a rel="me" href="mailto:marcinostaszewski@gmail.com">marcinostaszewski@gmail.com</a>
      </div>
      <div>
      <img class="icon" alt="Mobile phone" src="https://cdn.statically.io/gh/tailwindlabs/heroicons/master/src/24/outline/device-phone-mobile.svg">
      <span>+48 604 972 951</span>
      </div>
      </section>
      <section id="profiles">
      <div class="brand">
      <img class="icon" alt="github" src="https://cdn.simpleicons.org/github">
      <a rel="me" href="https://github.com/marcinostaszewski">github.com/marcinostaszewski</a>
      </div>
      <div class="brand">
      <img class="icon" alt="linkedin" src="https://cdn.simpleicons.org/linkedin">
      <a rel="me" href="https://www.linkedin.com/in/marcinostaszewski/">linkedin.com/in/marcinostaszewski</a>
      </div>
    </section>
  </address>
  `;
})();
