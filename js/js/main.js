const btnMenuHam = document.querySelector('#menu-ham');
const btnClose = document.querySelector('#btn-close');
const btnFronted = document.querySelector('#h-skills__nav__fronted');
const btnBackend = document.querySelector('#h-skills__nav__backend');
const btnTools = document.querySelector('#h-skills__nav__tools');
const btnLanguages = document.querySelector('#languages');

btnMenuHam.onclick = function(e){
  e.preventDefault();
  const nav = document.querySelector('#nav');
  nav.classList.remove('nav__close');
}

btnClose.onclick = function(e){
  e.preventDefault();
  const nav = document.querySelector('#nav');
  nav.classList.add('nav__close');
}

btnFronted.onclick = function(e){
  e.preventDefault();
  const skills = document.querySelectorAll('.h-skills__nav__skill');
  const nav = document.querySelector('#h-skills__nav__fronted');
  const hover = document.querySelector('#h-skills__nav__hover');
  skills.forEach((el) => {
    el.classList.remove('h-skills__nav__hover-color');
  });
    nav.classList.add('h-skills__nav__hover-color');
  hover.style.top = '0';
}

btnBackend.onclick = function(e){
  e.preventDefault();
  const skills = document.querySelectorAll('.h-skills__nav__skill');
  const nav = document.querySelector('#h-skills__nav__backend');
  const hover = document.querySelector('#h-skills__nav__hover');
  skills.forEach((el) => {
    el.classList.remove('h-skills__nav__hover-color');
  });
  nav.classList.add('h-skills__nav__hover-color');
  hover.style.top = '5.1rem';
}

btnTools.onclick = function(e){
  e.preventDefault();
  const skills = document.querySelectorAll('.h-skills__nav__skill');
  const nav = document.querySelector('#h-skills__nav__tools');
  const hover = document.querySelector('#h-skills__nav__hover');
  skills.forEach((el) => {
    el.classList.remove('h-skills__nav__hover-color');
  });
  nav.classList.add('h-skills__nav__hover-color');
  hover.style.top = '10.1rem';
}

btnLanguages.onclick = function(e){
  e.preventDefault();
  const language = btnLanguages.getAttribute('lang-state');
  const divEs = document.querySelector('#languages__es');
  const divEn = document.querySelector('#languages__en');
  const divSwitch = document.querySelector('#languages__switch');
  if(language == 'es')
  {
    divEs.classList.add('languages__es--inactive');
    divEn.classList.remove('languages__en--inactive');
    divSwitch.classList.add('languages__switch--en');
    btnLanguages.setAttribute('lang-state', 'en');
    console.log('es');
  }
  else
  {
    divEs.classList.remove('languages__es--inactive');
    divEn.classList.add('languages__en--inactive');
    divSwitch.classList.remove('languages__switch--en');
    btnLanguages.setAttribute('lang-state', 'es');
    console.log('en');
  }
}