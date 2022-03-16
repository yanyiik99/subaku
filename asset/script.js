// My JavaScript Humberger Menu
const menuToggle = document.querySelector('.burger input');
const navSlide = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  navSlide.classList.toggle('slide');
});
// End Humberger Menu

// Start One Page Scroll
// End One Page Scroll

// myPlayFunction
function myPlayFunction(newState) {
  document.getElementById('cakapPlay').style.animationPlayState = newState;
  document.getElementById('cakapPlayOne').style.animationPlayState = newState;
  document.getElementById('cakapPlayTwo').style.animationPlayState = newState;
  document.getElementById('cakapPlayThree').style.animationPlayState = newState;
  document.getElementById('cakapPlayFour').style.animationPlayState = newState;
}
