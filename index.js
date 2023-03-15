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
        const Projets = document.createElement("currentElement")
        const Projet = document.createElement("figure")
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
            Bouton.className= "filtres"
            Projet.appendchild(ProjetImg)
            Projet.appendchild(ProjetTitle)
            document.querySelector(".gallery").appendchild(Projet)
        } */


        BoutonTous.addEventListener ("click", function (){
            console.log("bouton bien cliqué")
            /*const projetsFiltrés = projets.filter(function (){})*/
            document.querySelector(".gallery").textContent = ""
            /* const projetsFiltrésTous = projets.filter(function (figure){
                return projets.name = "objets"
            }); */
            const ProjetsTous = Projets.filter(function (Projet){
                return Projet.category
            })
            
            
        })
        /* console.log(projetsFiltrés) */
    }
    
))