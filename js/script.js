window.addEventListener("load", () => {

  /* Language switcher */
  const langBox = document.querySelector('.lang')
  const langSwitch = document.querySelector('.lang__switch')
  const langOptions = document.querySelector('.lang__options')

  
  langBox.addEventListener('click', () => {
    langOptions.classList.toggle('lang__options_enable')
  })

  langOptions.addEventListener('click', (event) => {
    const value = event.target.getAttribute("data-value")
    if (value){
      langSwitch.textContent = value;
    }
  })

  /* Modal */

  const modal = document.querySelector('.modal')
  const modalCard = document.querySelector('.modal-card')
  const modalTrigger = document.querySelectorAll('[data-modal]')
  const modalCloseBtn = document.querySelector('[data-modal-close]')

  function openModal() {
    modal.classList.add('modal__active')
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    modal.classList.remove('modal__active')
    document.body.style.overflow = 'visible'
  }

  modalTrigger.forEach((elem) => {
    elem.addEventListener('click', openModal)
  })

  modalCloseBtn.addEventListener('click', closeModal)

  modal.addEventListener('click', (event) => {
    console.log(event.target, modal)
    if (event.target == modal) {
      closeModal();
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.code == 'Escape' && modal.classList.contains('modal__active')) {
      closeModal();
    }
  })

  
});