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

  // Função para carregar a imagem
  function loadSVG() {
    // Determina o caminho do arquivo SVG com base no modo
    const svgPath = html.classList.contains("light")
      ? "/assets/Logo-light.svg"
      : "/assets/Logo-dark.svg"

    // Verifica se o navegador é o Safari em dispositivos móveis
    const isMobileSafari =
      /Safari/i.test(navigator.userAgent) &&
      /iPhone|iPad|iPod/i.test(navigator.userAgent)

    // Se for o Safari em dispositivos móveis, carrega a imagem via XMLHttpRequest
    if (isMobileSafari) {
      const xhr = new XMLHttpRequest()
      xhr.open("GET", svgPath, true)
      xhr.overrideMimeType("image/svg+xml")
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const newImg = new Image()
          newImg.src =
            "data:image/svg+xml," + encodeURIComponent(xhr.responseText)
          newImg.onload = function () {
            // Substitui a imagem existente quando o carregamento estiver completo
            const oldImg = document.querySelector("#footer img")
            oldImg.parentNode.replaceChild(newImg, oldImg)
          }
          newImg.onerror = function () {
            console.error("Erro ao carregar a imagem.")
          }
        }
      }
      xhr.send()
    } else {
      // Se não for o Safari em dispositivos móveis, carrega a imagem normalmente
      const newImg = new Image()
      newImg.onload = function () {
        // Substitui a imagem existente quando o carregamento estiver completo
        const oldImg = document.querySelector("#footer img")
        oldImg.parentNode.replaceChild(newImg, oldImg)
      }
      newImg.onerror = function () {
        console.error("Erro ao carregar a imagem.")
      }
      newImg.src = svgPath
    }
  }

  // Carrega a imagem
  loadSVG()
})
