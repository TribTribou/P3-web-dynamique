// mes constantes pour sélectionner et créer selon mes besoins
const boutonModifierProjets = document.querySelector("#boutonModifierProjets")
const modaleGaleriePhoto = document.createElement("aside")
const blocmodaleGaleriePhoto = document.createElement("div")
const portfolio = document.querySelector("#portfolio")

// filiation
portfolio.appendChild(modaleGaleriePhoto)
modaleGaleriePhoto.appendChild(blocmodaleGaleriePhoto)

// Ajouts d'id pour le CSS
modaleGaleriePhoto.id = "modaleGaleriePhoto"

// Attributs nécessaires
modaleGaleriePhoto.setAttribute("class","modal")
modaleGaleriePhoto.setAttribute("aria-hidden","true")
modaleGaleriePhoto.setAttribute("role","dialog")

// Je souhaite ne pas les afficher par défaut
modaleGaleriePhoto.style.display = "none"

// event click pour afficher la modale de galerie photo
boutonModifierProjets.addEventListener("click", function() {
  console.log("boutonModifierProjets bien cliqué")
  modaleGaleriePhoto.style.display = "block"
})

