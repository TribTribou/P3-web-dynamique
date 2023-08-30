//récupération des projets de la galerie
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
            document.querySelector(".gallery").textContent = ""
            const projetsFiltrés = p.filter(function (Projet){
                return Projet.category.name  == "Objets"

            })
            for (let currentElement of projetsFiltrés ) { // cette ligne sert à récupérer précisément la liste des projets
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
        })

        BoutonAppartements.addEventListener ("click", function (){
            console.log("bouton Appartements bien cliqué")
            document.querySelector(".gallery").textContent = ""
            const projetsFiltrés = p.filter(function (Projet){
                return Projet.category.name  == "Appartements" // ici on sélectionne précisement la catégorie à filtrer

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
        })

        BoutonHotelRest.addEventListener ("click", function (){
            console.log("bouton Hotel bien cliqué")
            document.querySelector(".gallery").textContent = ""
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
        })
    }
        
))