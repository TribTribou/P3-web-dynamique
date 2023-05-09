/*//Récupérations des projets depuis le fichier Json
const reponse = await fetch("http://localhost:5678/api/works");
const projets = await reponse.json();

for (let i = 0; i < Projets.lenghth; i++) {
    const projet = projets[i];
    


}
*/
fetch("http://localhost:5678/api/works").then(p => p.json().then(
    p =>{
        console.log(p)

        const Filtres = document.querySelector("#filtres-travaux");
        const BoutonTous = document.createElement("button")
        const BoutonObjets = document.createElement("button")
        const BoutonAppartements = document.createElement("button")
        const BoutonHotelRest = document.createElement("button")
        BoutonTous.textContent = "Tous"
        BoutonObjets.textContent = "Objets"
        BoutonAppartements.textContent = "Appartements"
        BoutonHotelRest.textContent = "Hôtel & Restaurants"
        Filtres.appendChild(BoutonTous)
        Filtres.appendChild(BoutonObjets)
        Filtres.appendChild(BoutonAppartements)
        Filtres.appendChild(BoutonHotelRest)
        
        console.log(Filtres.children)

        BoutonTous.className= "filtres" /* Faire la class css plus tard */
        BoutonObjets.className= "filtres"
        BoutonAppartements.className= "filtres"
        BoutonHotelRest.className= "filtres"
        
        /* for (let currentElement of p ) {
            const Projet = document.createElement("figure")
            const ProjetImg = document.createElement("img")
            const ProjetTitle = document.createElement("figcaption")
            BoutonTous.className= "filtres"
            ProjetImg.src = currentElement.imageUrl
            ProjetTitle.textContent = currentElement.title
            Projet.appendChild(ProjetImg)
            Projet.appendChild(ProjetTitle)
            document.querySelector(".gallery").appendChild(Projet)
        } */


        BoutonTous.addEventListener ("click", function (){
            console.log("bouton Tous bien cliqué")
            document.querySelector(".gallery").textContent = ""
            for (let currentElement of p ) {
                const Projet = document.createElement("figure")
                const ProjetImg = document.createElement("img")
                const ProjetTitle = document.createElement("figcaption")
                BoutonTous.className= "filtres"
                ProjetImg.src = currentElement.imageUrl
                ProjetTitle.textContent = currentElement.title
                Projet.appendChild(ProjetImg)
                Projet.appendChild(ProjetTitle)
                document.querySelector(".gallery").appendChild(Projet)
            }
            console.log(p)
        })

        BoutonObjets.addEventListener ("click", function (){
            console.log("bouton Objets bien cliqué")
            /*const projetsFiltrés = projets.filter(function (){})*/
            document.querySelector(".gallery").textContent = ""
            /* const projetsFiltrésTous = projets.filter(function (figure){
                return projets.name = "objets"
            }); */
            const projetsFiltrés = p.filter(function (Projet){
                return Projet.category.name  == "Objets"

            })
            for (let currentElement of projetsFiltrés ) {
                const Projet = document.createElement("figure")
                const ProjetImg = document.createElement("img")
                const ProjetTitle = document.createElement("figcaption")
                BoutonObjets.className= "filtres"
                ProjetImg.src = currentElement.imageUrl
                ProjetTitle.textContent = currentElement.title
                Projet.appendChild(ProjetImg)
                Projet.appendChild(ProjetTitle)
                document.querySelector(".gallery").appendChild(Projet)
            }
            console.log(p)
            /* console.log(ProjetsTous) =>n'est plu utilisé */
        })

        BoutonAppartements.addEventListener ("click", function (){
            console.log("bouton Appartements bien cliqué")
            /*const projetsFiltrés = projets.filter(function (){})*/
            document.querySelector(".gallery").textContent = ""
            /* const projetsFiltrésTous = projets.filter(function (figure){
                return projets.name = "objets"
            }); */
            const projetsFiltrés = p.filter(function (Projet){
                return Projet.category.name  == "Appartements"

            })
            for (let currentElement of projetsFiltrés ) {
                const Projet = document.createElement("figure")
                const ProjetImg = document.createElement("img")
                const ProjetTitle = document.createElement("figcaption")
                BoutonAppartements.className= "filtres"
                ProjetImg.src = currentElement.imageUrl
                ProjetTitle.textContent = currentElement.title
                Projet.appendChild(ProjetImg)
                Projet.appendChild(ProjetTitle)
                document.querySelector(".gallery").appendChild(Projet)
            }
            console.log(p)
            /* console.log(ProjetsTous) =>n'est plu utilisé */
        })

        BoutonHotelRest.addEventListener ("click", function (){
            console.log("bouton Hotel bien cliqué")
            /*const projetsFiltrés = projets.filter(function (){})*/
            document.querySelector(".gallery").textContent = ""
            /* const projetsFiltrésTous = projets.filter(function (figure){
                return projets.name = "objets"
            }); */
            const projetsFiltrés = p.filter(function (Projet){
                return Projet.category.name  == "Hotels & restaurants"

            })
            for (let currentElement of projetsFiltrés ) {
                const Projet = document.createElement("figure")
                const ProjetImg = document.createElement("img")
                const ProjetTitle = document.createElement("figcaption")
                BoutonHotelRest.className= "filtres"
                ProjetImg.src = currentElement.imageUrl
                ProjetTitle.textContent = currentElement.title
                Projet.appendChild(ProjetImg)
                Projet.appendChild(ProjetTitle)
                document.querySelector(".gallery").appendChild(Projet)
            }
            console.log(p)
            /* console.log(ProjetsTous) =>n'est plu utilisé */
        })
    }
        
))