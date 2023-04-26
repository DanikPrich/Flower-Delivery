window.addEventListener("load", () => {
  console.log("page is fully loaded");

  const langSwitch = document.querySelector('.lang')
  const langBox = document.querySelector('.lang__switch')
  const langOptions = document.querySelector('.lang__options')

  langSwitch.addEventListener('click', () => {
    langOptions.classList.toggle('lang__options_enable')
  })

  langOptions.addEventListener('click', (event) => {
    const value = event.target.getAttribute("data-value")
    if (value){
      langBox.textContent = value;
    }
  })
});