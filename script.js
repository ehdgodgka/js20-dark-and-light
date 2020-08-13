const helloSeoulSection = document.getElementById('hello-seoul');
const imgAuthorLink = helloSeoulSection.querySelector('.photo-author');
const imgAnchors = document.getElementById('peek').querySelectorAll('a');
const peekImgs = document.getElementById('peek').querySelectorAll('img');
const eventTitle = document.getElementById('event').querySelector('h1');
const events = document.querySelectorAll('.event-container');
const contactImg = document.getElementById('contact').querySelector('img');
const toggleSwitchWrapper = document.getElementById('theme-switch-wrapper');
const toggleSwitchIcon = toggleSwitchWrapper.querySelector('i');
const toggleSwitch = document.querySelector('input[type="checkbox"]');

//switch theme dynamically
const applyTheme = () => {
  if (toggleSwitch.checked) {
    //dark-mode
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleSwitchIcon.className = 'fas fa-moon';
    imgAuthorLink.textContent = `author by ${imgDarkLinks.background.author}`;
    imgAuthorLink.setAttribute('href', imgDarkLinks.background.link);
    helloSeoulSection.style.backgroundImage = `url('assets/seoul-img/background_dark.jpg')`;

    for (let i = 0; i < 3; i++) {
      peekImgs[i].setAttribute('src', `assets/seoul-img/img${i + 1}_dark.jpg`);
      imgAnchors[i].setAttribute('href', imgDarkLinks[i]);
    }
    eventTitle.textContent = 'night event';
    events.forEach((event, index) => {
      event.querySelector('h2').textContent = imgDarkLinks.events[index].title;
      event.querySelector('img').setAttribute('src', imgDarkLinks.events[index].link);
    });
    contactImg.setAttribute('src', 'assets/contact_dark.svg');
  } else {
    //light-mode
    document.documentElement.removeAttribute('data-theme');
    toggleSwitchIcon.className = 'fas fa-sun';
    imgAuthorLink.textContent = `author by ${imgLightLinks.background.author}`;
    imgAuthorLink.setAttribute('href', imgLightLinks.background.link);
    helloSeoulSection.style.backgroundImage = `url('assets/seoul-img/background_light.jpg')`;

    for (let i = 0; i < 3; i++) {
      peekImgs[i].setAttribute('src', `assets/seoul-img/img${i + 1}_light.jpg`);
      imgAnchors[i].setAttribute('href', imgLightLinks[i]);
    }
    eventTitle.textContent = 'day event';

    events.forEach((event, index) => {
      event.querySelector('h2').textContent = imgLightLinks.events[index].title;
      event.querySelector('img').setAttribute('src', imgLightLinks.events[index].link);
    });
    contactImg.setAttribute('src', 'assets/contact_light.svg');
  }
};

toggleSwitch.addEventListener('change', applyTheme);
applyTheme();
