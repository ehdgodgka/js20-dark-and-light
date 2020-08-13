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
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';


//switch theme dynamically
const applyTheme = () => {
  const theme = toggleSwitch.checked ? DARK_THEME : LIGHT_THEME;
  const src = theme === DARK_THEME ? imgDarkLinks : imgLightLinks;

  //theme mode
  themeStorage.setItem('hello-seoul-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  toggleSwitchIcon.className = theme === DARK_THEME? 'fas fa-moon' : 'fas fa-sun';

  // hello seoul section
  imgAuthorLink.textContent = `author by ${src.background.author}`;
  imgAuthorLink.setAttribute('href', src.background.link);
  helloSeoulSection.style.backgroundImage = `url('assets/seoul-img/background_${theme}.jpg')`;

  //peek section
  for (let i = 0; i < 3; i++) {
    peekImgs[i].setAttribute('src', `assets/seoul-img/img${i + 1}_${theme}.jpg`);
    imgAnchors[i].setAttribute('href', src[i]);
  }

  //event section
  eventTitle.textContent = theme === DARK_THEME ? 'night event' : 'day event';
  events.forEach((event, index) => {
    event.querySelector('h2').textContent = src.events[index].title;
    event.querySelector('img').setAttribute('src', src.events[index].link);
  });

  //contact section
  contactImg.setAttribute('src', `assets/contact_${theme}.svg`);
};

toggleSwitch.addEventListener('change', applyTheme);
toggleSwitch.checked = themeStorage.getItem('hello-seoul-theme') === 'dark' ? true : false;
applyTheme();
