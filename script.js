let link1 = document.querySelector('#link1');
let link2 = document.querySelector('#link2');

let iconsContainer = document.querySelector('.items-container');
function showOrHide() {
  link1.classList.toggle('hidden-link');
  link2.classList.toggle('hidden-link');
  iconsContainer.classList.toggle('hidden');
}

link1.addEventListener('click', showOrHide);
link2.addEventListener('click', showOrHide);
