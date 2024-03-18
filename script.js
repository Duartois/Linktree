document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement
  const now = new Date()
  const hour = now.getHours()

  // Light mode from 5 AM to 6 PM
  if (hour >= 5 && hour < 18) {
    html.classList.add("light")
    applyModeStyles("light")
  } else {
    html.classList.remove("light")
    applyModeStyles("dark")
  }

  // Função para aplicar estilos do modo claro ou escuro
  function applyModeStyles(mode) {
    // Seleciona a imagem do footer
    const img = document.querySelector("#footer img")
    // Determina o caminho do arquivo SVG com base no modo
    const svgPath =
      mode === "light" ? "/assets/Logo-light.svg" : "/assets/Logo-dark.svg"

    // Define o atributo src da imagem para o modo correto
    img.setAttribute("src", window.location.origin + svgPath)
  }
})