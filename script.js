document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement
  const now = new Date()
  const hour = now.getHours()

  // Light mode from 5 AM to 6 PM
  if (hour >= 5 && hour < 18) {
    html.classList.add("light")
    applyLightModeStyles()
  } else {
    html.classList.remove("light")
    applyDarkModeStyles()
  }

  // Função para aplicar estilos do modo claro
  function applyLightModeStyles() {
    // Altere a imagem do footer para o modo claro
    const img = document.querySelector("#footer img")
    img.setAttribute("src", "./assets/Logo-dark.svg")
  }

  // Função para aplicar estilos do modo escuro
  function applyDarkModeStyles() {
    // Altere a imagem do footer para o modo escuro
    const img = document.querySelector("#footer img")
    img.setAttribute("src", "./assets/Logo-light.svg")
  }
  
})
