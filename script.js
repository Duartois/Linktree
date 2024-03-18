document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement
  const now = new Date()
  const hour = now.getHours()

  // Light mode from 5 AM to 6 PM
  if (hour >= 5 && hour < 18) {
    html.classList.add("light")
  } else {
    html.classList.remove("light")
  }

  // Função para aplicar estilos do modo claro ou escuro
  function applyModeStyles(mode) {
    // Seleciona a imagem do footer
    const img = document.querySelector("#footer img")
    // Determina o caminho do arquivo SVG com base no modo
    const svgPath =
      mode === "light" ? "./assets/Logo-dark.svg" : "./assets/Logo-light.svg"

    // Verifica se o navegador é o Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    // Se for o Safari, define o atributo src da imagem para o modo correto
    if (isSafari) {
      img.setAttribute("src", svgPath)
    }
  }

  // Aplica estilos com base no modo atual
  applyModeStyles(html.classList.contains("light") ? "light" : "dark")
})
