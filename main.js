const menuBtn = document.querySelector('.menu-btn');
const toolBar = document.querySelector('.toolbar1');
const searchInput = document.querySelector('#search-input');
const email = document.querySelector('#email-input');
const subscribeBtn = document.querySelector('.subscribe'); 
let menuOpen = false;

//Burger animation
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    toolBar.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    toolBar.classList.remove('open');
    menuOpen = false;
  }
});

//Search bar
document.querySelector('.search1').addEventListener('click', () => {
  document.querySelector('.search-bar').style.display = "flex";
})

document.querySelector('.search2').addEventListener('click', () => {
  document.querySelector('.search-bar').style.display = "flex";
})

document.querySelector('.x').addEventListener('click', () => {
  document.querySelector('.search-bar').style.display = "none";
})

searchInput.addEventListener('keyup', (e) => {
  let inputValue = e.target.value;
  console.log(inputValue);
})

//Email validation
subscribeBtn.addEventListener('click', () => {
  let emailValue = email.value;

  if(emailIsValid(emailValue)){
    document.querySelector('.done').style.display = "block";
    document.querySelector('.error').style.display = "none";
  } else {
    document.querySelector('.error').style.display = "block";
  }
})

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}