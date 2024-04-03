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

  // Função para carregar a imagem do perfil
  function loadProfileImage() {
    // Determina o caminho da imagem do perfil com base no modo
    const profileImagePath = html.classList.contains("light")
      ? "/assets/avatar-light.png"
      : "/assets/avatar-dark.png"

    // Seleciona a imagem do perfil
    const profileImage = document.getElementById("profile").querySelector("img")

    // Carrega a imagem
    profileImage.onload = function () {
      // Substitui a imagem existente quando o carregamento estiver completo
      profileImage.alt = "Foto-Logo" // Define o atributo 'alt' da imagem
    }
    profileImage.onerror = function () {
      console.error("Erro ao carregar a imagem do perfil.")
    }
    profileImage.src = profileImagePath
  }

  // Carrega a imagem do perfil
  loadProfileImage()
})
// Função para carregar a imagem
function loadSVG() {
  // Determina o caminho do arquivo SVG com base no modo
  const svgPath = html.classList.contains("light")
    ? "/assets/Logo-dark.svg"
    : "/assets/Logo-light.svg"

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
