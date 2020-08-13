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
const themeStorage = window.localStorage;

//switch theme dynamically
const applyTheme = () => {
  if (toggleSwitch.checked) {
    //dark-mode
    themeStorage.setItem('hello-seoul-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleSwitchIcon.className = 'fas fa-moon';

    // hello seoul section
    imgAuthorLink.textContent = `author by ${imgDarkLinks.background.author}`;
    imgAuthorLink.setAttribute('href', imgDarkLinks.background.link);
    helloSeoulSection.style.backgroundImage = `url('assets/seoul-img/background_dark.jpg')`;

    //peek section
    for (let i = 0; i < 3; i++) {
      peekImgs[i].setAttribute('src', `assets/seoul-img/img${i + 1}_dark.jpg`);
      imgAnchors[i].setAttribute('href', imgDarkLinks[i]);
    }
    //event section
    eventTitle.textContent = 'night event';
    events.forEach((event, index) => {
      event.querySelector('h2').textContent = imgDarkLinks.events[index].title;
      event.querySelector('img').setAttribute('src', imgDarkLinks.events[index].link);
    });
    //contact section
    contactImg.setAttribute('src', 'assets/contact_dark.svg');
  } else {
    //light-mode
    themeStorage.setItem('hello-seoul-theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    toggleSwitchIcon.className = 'fas fa-sun';

    //hello-seoul section
    imgAuthorLink.textContent = `author by ${imgLightLinks.background.author}`;
    imgAuthorLink.setAttribute('href', imgLightLinks.background.link);
    helloSeoulSection.style.backgroundImage = `url('assets/seoul-img/background_light.jpg')`;

    //peek section
    for (let i = 0; i < 3; i++) {
      peekImgs[i].setAttribute('src', `assets/seoul-img/img${i + 1}_light.jpg`);
      imgAnchors[i].setAttribute('href', imgLightLinks[i]);
    }

    //event section
    eventTitle.textContent = 'day event';
    events.forEach((event, index) => {
      event.querySelector('h2').textContent = imgLightLinks.events[index].title;
      event.querySelector('img').setAttribute('src', imgLightLinks.events[index].link);
    });

    //contact section
    contactImg.setAttribute('src', 'assets/contact_light.svg');
  }
};

toggleSwitch.addEventListener('change', applyTheme);
toggleSwitch.checked = themeStorage.getItem('hello-seoul-theme') === 'dark' ? true : false;
applyTheme();
