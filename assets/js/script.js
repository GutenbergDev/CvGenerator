function createModal() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('disable');
  
  const buttonClose = document.createElement('div');
  buttonClose.innerHTML = `
    <p>X</p>
  `;
  
  buttonClose.classList.add('button-close')
  modal.appendChild(buttonClose);
  modal.appendChild(document.querySelector('nav ul'));

  document.querySelector('body').appendChild(modal);
}

function openModal() {
  document.querySelector('.modal').classList.remove('disable');
  
  document.querySelector('.button-close').addEventListener('click', closeModal)
}

function closeModal() {
  document.querySelector('.modal').classList.add('disable');
}

if((window.matchMedia("(max-width:800px)").matches)) {
  const burger = document.createElement('div');
  burger.innerHTML = `
    <div class="lines"></div>
    <div class="lines"></div>
    <div class="lines"></div>
  `
  burger.classList.add('burger');

  document.querySelector('.container-menu').classList.add('ul-modal');
  
  document.querySelector('.container-menu').appendChild(burger);
  
  createModal();
  burger.addEventListener('click', openModal);
}
