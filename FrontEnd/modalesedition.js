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
const conteneurImageuploadée = document.createElement("div")
const inputAjoutImage = document.createElement("input")
const hiddenInputUploadImage = document.createElement("input")
const placementImageuploade = document.createElement('img')
const labelTitre = document.createElement("label")
const inputTitre = document.createElement("input")
const labelCatégorie = document.createElement("label")
const inputCatégorie = document.createElement("select")
const optionCatégorie1 = document.createElement("option")
const optionCatégorie2 = document.createElement("option")
const optionCatégorie3 = document.createElement("option")
const inputBoutonValider = document.createElement("input")
var token = localStorage.getItem('token')


// initialisation de la variable p, pour pouvoir récupérer et manipuler la liste des projets de la galerie
let p = [];



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
formulaireAjoutPhoto.appendChild(hiddenInputUploadImage)
formulaireAjoutPhoto.appendChild(labelTitre)
formulaireAjoutPhoto.appendChild(inputTitre)
formulaireAjoutPhoto.appendChild(labelCatégorie)
formulaireAjoutPhoto.appendChild(inputCatégorie)
formulaireAjoutPhoto.appendChild(inputBoutonValider)
inputCatégorie.appendChild(optionCatégorie1)
inputCatégorie.appendChild(optionCatégorie2)
inputCatégorie.appendChild(optionCatégorie3)
formulaireAjoutPhoto.appendChild(placementImageuploade)

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
hiddenInputUploadImage.id = "hiddenInputUploadImage"
inputTitre.id = "inputTitre"
inputBoutonValider.id = "inputBoutonValider"
labelTitre.style.class = "labelAjoutPhoto"
labelCatégorie.style.class = "labelAjoutPhoto"
inputCatégorie.id = "catégories"
placementImageuploade.id = "placementImageuploade"

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
hiddenInputUploadImage.setAttribute("type", "file")
labelTitre.setAttribute("for","Titre")
labelCatégorie.setAttribute("for","Catégorie")
inputTitre.setAttribute("name", "champTitre")
inputTitre.setAttribute("type", "text")
inputCatégorie.setAttribute("name", "champCatégorie")
optionCatégorie1.setAttribute("value", 1)
optionCatégorie2.setAttribute("value", 2)
optionCatégorie3.setAttribute("value", 3)
inputBoutonValider.setAttribute("type","submit")
inputBoutonValider.setAttribute("value", "Valider")

// ajout d'attributs spécifiques
inputTitre.required = "true"

// Ajout du texte
h2blocmodaleGaleriePhoto.textContent = "Galerie Photo"
boutonAjouterPhoto.textContent = "Ajouter une photo"
boutonSupprimergalerie.textContent = "Supprimer la galerie"
h2modaleAjoutPhoto.textContent = "Ajout photo"
boutonRetourGaleriePhoto.textContent = "<="
boxCadreImage.textContent = "jpg, png: 4mo max"
labelTitre.textContent = "Titre"
labelCatégorie.textContent = "Catégorie"
optionCatégorie1.textContent = "Objets"
optionCatégorie2.textContent = "Appartements"
optionCatégorie3.textContent = "Hôtels & Restaurants"

// Je souhaite ne pas les afficher par défaut
modaleGaleriePhoto.style.display= "none"
blocmodaleGaleriePhoto.style.display = "none"
modaleAjoutPhoto.style.display = "none"
hiddenInputUploadImage.style.display = "none"
placementImageuploade.style.display = "none"

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
        // Fonction de suppression d'un projet
        cadreNoirboutonDelete.addEventListener("click", function(){
            console.log("cadreNoirBoutonDelete bien cliqué")
            // style.display = "none" pour tester le ciblage sans conséquences.
            // Code à changer plus tard pour réaliser une véritable suppression.
            ficheImage.style.display = "none"
        })
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



//event click pour lier l'input type image à l'input caché type file.
inputAjoutImage.addEventListener("click",function() {
    event.preventDefault();
    console.log("boutonAjouterPhoto bien cliqué")
    hiddenInputUploadImage.click()
 })

// fonction d'envoi du formulaire, je l'appel après avoir générer l'aperçu de l'image pour éviter des conflits
 function submitForm() {
     // Créer un objet FormData avec les données du formulaire
     //let projetenvoyé = {"id":1 + p.length,"title":inputTitre.value,"imageUrl":"http://localhost:5678/images/" + inputTitre.value + ".png","image":hiddenInputUploadImage.files[0],"categoryId":inputCatégorie.value,"userId":1}
     var envoiFormulaire = new FormData();
     //formData.append("id", 1 + p.length);
     envoiFormulaire.append("image", hiddenInputUploadImage.files[0]);
     envoiFormulaire.append("title", inputTitre.value);
     //formData.append("imageUrl", "http://localhost:5678/images/" + inputTitre.value + ".png");
     envoiFormulaire.append("category", 1/* inputCatégorie.value */);
     //formData.append("userId", 1);
     console.log(envoiFormulaire)
     console.log(hiddenInputUploadImage.files[0])
     console.log(inputTitre.value)
// Envoyer les données du formulaire avec fetch
// On utilise la method post pour l'envoyer dans le back end
fetch("http://localhost:5678/api/works", {
    method: "POST",
    headers: {
        //"content-type": "multipart/form-data",
        Authorization: "Bearer " + token

    },
    body:  envoiFormulaire
})
.then(response => response.json()
.then(data => {
    console.log("Projet posté :", data);
    p = data;
    // Réinitialiser le formulaire et la modale d'ajout de projet
    formulaireAjoutPhoto.reset();
    placementImageuploade.style.display = "none";
    modaleAjoutPhoto.style.display = "none";
    blocmodaleGaleriePhoto.style.display = "flex"
}))
.catch(error => console.error(error));
}         

//fonction pour récupérer et afficher un aperçu de l'image uploadée
hiddenInputUploadImage.addEventListener("change", (event) => {
event.preventDefault();
console.log(event.target.files[0])
placementImageuploade.src = window.URL.createObjectURL(event.target.files[0])
console.log(window.URL.createObjectURL(event.target.files[0]))
placementImageuploade.style.display = "flex"
// le dossier content les images est considéré comme un tableau. 
// Il faut donc utiliser les [] pour que la sélection s'opère correctement dans le code
})

inputBoutonValider.addEventListener("click", function(event) {
event.preventDefault();
submitForm()
console.log(submitForm)
})