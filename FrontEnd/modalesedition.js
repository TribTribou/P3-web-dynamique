// mes constantes pour sélectionner et créer selon mes besoins

const modaleGaleriePhoto = document.createElement("aside")
const blocmodaleGaleriePhoto = document.createElement("div")
const boutonCloseModale = document.createElement("button")
const h2blocmodaleGaleriePhoto = document.createElement("h2")
const galerieblocmodaleGaleriePhoto = document.createElement("p")
const boutonAjouterPhoto = document.createElement("button")
const boutonSupprimergalerie = document.createElement("button")
const portfolio = document.querySelector("#portfolio")
const modaleAjoutPhoto = document.createElement("aside")
const boutonCloseModaleAjoutPhoto = document.createElement("button")
const boutonRetourGaleriePhoto = document.createElement("button")
const h2modaleAjoutPhoto = document.createElement("h2")
const formulaireAjoutPhoto = document.createElement("form")
const boxCadreImage = document.createElement("div")
const inputAjoutImage = document.createElement("input")
const labelTitre = document.createElement("label")
const inputTitre = document.createElement("input")
const labelCatégorie = document.createElement("label")
const inputCatégorie = document.createElement("input")
const inputBoutonValider = document.createElement("input")



// filiation
portfolio.appendChild(modaleGaleriePhoto)
modaleGaleriePhoto.appendChild(blocmodaleGaleriePhoto)
modaleGaleriePhoto.appendChild(modaleAjoutPhoto)
blocmodaleGaleriePhoto.appendChild(boutonCloseModale)
blocmodaleGaleriePhoto.appendChild(h2blocmodaleGaleriePhoto)
blocmodaleGaleriePhoto.appendChild(galerieblocmodaleGaleriePhoto)
blocmodaleGaleriePhoto.appendChild(boutonAjouterPhoto)
blocmodaleGaleriePhoto.appendChild(boutonSupprimergalerie)
modaleAjoutPhoto.appendChild(boutonCloseModaleAjoutPhoto)
modaleAjoutPhoto.appendChild(boutonRetourGaleriePhoto)
modaleAjoutPhoto.appendChild(h2modaleAjoutPhoto)
modaleAjoutPhoto.appendChild(boxCadreImage)
modaleAjoutPhoto.appendChild(formulaireAjoutPhoto)
formulaireAjoutPhoto.appendChild(inputAjoutImage)
formulaireAjoutPhoto.appendChild(labelTitre)
formulaireAjoutPhoto.appendChild(inputTitre)
formulaireAjoutPhoto.appendChild(labelCatégorie)
formulaireAjoutPhoto.appendChild(inputCatégorie)
formulaireAjoutPhoto.appendChild(inputBoutonValider)

// Ajouts d'id ou de classe pour le CSS
modaleGaleriePhoto.id = "modaleGaleriePhoto"
blocmodaleGaleriePhoto.id = "blocmodaleGaleriePhoto"
boutonCloseModale.id = "closeModale"
boutonCloseModaleAjoutPhoto.id = "boutonCloseModaleAjoutPhoto"
boutonAjouterPhoto.id = "boutonAjouterPhoto"
boutonSupprimergalerie.id = "boutonSupprimergalerie"
modaleAjoutPhoto.id = "modaleAjoutPhoto"
boutonRetourGaleriePhoto.id = "boutonRetourGaleriePhoto"
formulaireAjoutPhoto.id = "formulaireAjoutPhoto"
boxCadreImage.id = "boxCadreImage"
inputAjoutImage.id = "inputAjoutImage"
inputBoutonValider.id = "inputBoutonValider"
labelTitre.style.class = "labelAjoutPhoto"
labelCatégorie.style.class = "labelAjoutPhoto"


// Attributs nécessaires
modaleGaleriePhoto.setAttribute("class","modal")
modaleGaleriePhoto.setAttribute("aria-hidden","true")
modaleGaleriePhoto.setAttribute("role","dialog")
boutonCloseModale.setAttribute("class", 'fa-regular fa-x')
boutonCloseModaleAjoutPhoto.setAttribute("class", 'fa-regular fa-x')
boxCadreImage.setAttribute("class", 'fa-light fa-image')

//Inputs du formulaire d'ajout de photos

inputAjoutImage.setAttribute("type", "image")
inputAjoutImage.setAttribute("value", "+ Ajouter photo")
labelTitre.setAttribute("for","Titre")
labelCatégorie.setAttribute("for","Catégorie")
inputTitre.setAttribute("name", "champTitre")
inputTitre.setAttribute("type", "text")
inputCatégorie.setAttribute("name", "champCatégorie")
inputCatégorie.setAttribute("type", "text")
inputBoutonValider.setAttribute("type","submit")
inputBoutonValider.setAttribute("value", "Valider")
// Ajout du texte
h2blocmodaleGaleriePhoto.textContent = "Galerie Photo"
boutonAjouterPhoto.textContent = "Ajouter une photo"
boutonSupprimergalerie.textContent = "Supprimer la galerie"
h2modaleAjoutPhoto.textContent = "Ajout photo"
boutonRetourGaleriePhoto.textContent = "<="
boxCadreImage.textContent = "jpg, png: 4mo max"
labelTitre.textContent = "Titre"
labelCatégorie.textContent = "Catégorie"

// Je souhaite ne pas les afficher par défaut
modaleGaleriePhoto.style.display= "none"
blocmodaleGaleriePhoto.style.display = "none"
modaleAjoutPhoto.style.display = "none"

//fetch pour récupérer la liste des travaux et afficher les images, pour pouvoir éditer
fetch("http://localhost:5678/api/works").then(p => p.json().then(
    p =>{
        console.log(p)
        for (let currentElement of p ) {
            const ficheImage = document.createElement("div")
            const projetImg = document.createElement("img")
            const cadreNoirboutonDelete = document.createElement('button')
            const cadreNoirboutonsMove = document.createElement("button")
            const boutonEditer = document.createElement("button")
            projetImg.src = currentElement.imageUrl
            galerieblocmodaleGaleriePhoto.appendChild(ficheImage)
            ficheImage.appendChild(projetImg)
            ficheImage.appendChild(cadreNoirboutonDelete)
            ficheImage.appendChild(cadreNoirboutonsMove)
            ficheImage.appendChild(boutonEditer)
            cadreNoirboutonDelete.id = "cadreNoirboutonDelete"
            cadreNoirboutonsMove.id = "cadreNoirboutonsMove"
            boutonEditer.id = "boutonEditer"
            boutonEditer.textContent = "éditer"
            cadreNoirboutonDelete.setAttribute("class", 'fa-regular fa-trash-can')
            cadreNoirboutonsMove.setAttribute("class", 'fa-solid fa-up-down-left-right')
        }
    }))

// event click pour afficher les modales
boutonModifierProjets.addEventListener("click", function() {
      console.log("boutonModifierProjets bien cliqué")
      modaleGaleriePhoto.style.display = "flex"
      blocmodaleGaleriePhoto.style.display = "flex"
  })
boutonAjouterPhoto.addEventListener("click", function() {
    console.log("boutonAjouterPhoto bien cliqué")
    blocmodaleGaleriePhoto.style.display = "none"
    modaleAjoutPhoto.style.display = "flex"
})

// event click pour fermer les modales
boutonCloseModale.addEventListener("click", function() {
    console.log("boutonCloseModale bien cliqué")
    modaleGaleriePhoto.style.display = "none"
})
boutonCloseModaleAjoutPhoto.addEventListener("click", function() {
    console.log("boutonCloseModaleAjoutPhoto bien cliqué")
    modaleGaleriePhoto.style.display = "none"
    modaleAjoutPhoto.style.display= "none"
})
modaleGaleriePhoto.addEventListener("click", (event)=> {
    if (event.target === blocmodaleGaleriePhoto || blocmodaleGaleriePhoto.contains(event.target)) {
        event.stopPropagation();
        return; 
    }
    console.log("click hors boite modale")
    modaleGaleriePhoto.style.display = "none"
    modaleAjoutPhoto.style.display= "none"
})
modaleAjoutPhoto.addEventListener("click", (event)=> {
    if (event.target === modaleAjoutPhoto || modaleAjoutPhoto.contains(event.target)) {
        event.stopPropagation();
        return; 
    }
    console.log("click hors boite modale")
    modaleGaleriePhoto.style.display = "none"
    modaleAjoutPhoto.style.display= "none"
})
boutonRetourGaleriePhoto.addEventListener("click", function() {
    console.log("boutonRetourGaleriePhoto bien cliqué")
    blocmodaleGaleriePhoto.style.display = "flex"
    modaleAjoutPhoto.style.display = "none"
})
