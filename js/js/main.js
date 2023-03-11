const btnMenuHam = document.querySelector('#menu-ham');
const btnClose = document.querySelector('#btn-close');

btnMenuHam.onclick = function(){
  const nav = document.querySelector('#nav');
  nav.classList.remove('nav__close');
}

btnClose.onclick = function(){
  const nav = document.querySelector('#nav');
  nav.classList.add('nav__close');
}