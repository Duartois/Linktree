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

  // Verifica se o navegador é o Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  // Função para carregar a imagem
  function loadSVG() {
    // Determina o caminho do arquivo SVG com base no modo
    const svgPath = html.classList.contains("light")
      ? "/assets/Logo-light.svg"
      : "/assets/Logo-dark.svg"

    // Se for o Safari, carrega a imagem via XMLHttpRequest
    if (isSafari) {
      const xhr = new XMLHttpRequest()
      xhr.open("GET", svgPath, true)
      xhr.overrideMimeType("image/svg+xml")
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const svg = xhr.responseXML.documentElement
          const img = document.querySelector("#footer img")
          img.parentNode.replaceChild(svg, img)
        }
      }
      xhr.send()
    } else {
      // Se não for o Safari, carrega a imagem normalmente
      const img = document.querySelector("#footer img")
      img.setAttribute("src", svgPath)
    }
  }

  // Carrega a imagem
  loadSVG()
})
