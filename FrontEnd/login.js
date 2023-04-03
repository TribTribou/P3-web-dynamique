fetch("http://localhost:5678/api/works").then(p => p.json().then(
    /* J'utilise le fetch /works en guise de placeholder du /users/login qui bloque mon code pour l'instant */
    p =>{
      console.log(p)
      
      const Navigation = document.querySelector("li")
      const BoutonLogin = document.querySelector("#htmlLogin")
      const BoutonProjets = document.querySelector("#htmlProjets")
      const main = document.querySelector("main")
      const loginBloc = document.createElement("section")
      const formulaireLogin = document.createElement("form")
      loginBloc.id= "login"
      main.appendChild(loginBloc)
      /* Ma fonction login. J'ai ciblé les sections préexistante du main + le footer pour les cacher sans les supprimer
      le .textContent vide me sert à reset ma création d'éléments de la fonction login, 
      pour éviter les doublons à chaque nouveaux clics sur login. */
      const loginH1 = document.createElement("h2")
      const textMdpOubli = document.createElement("p")
      // Ma création d'éléments spécifiques à la page "Log in".
      loginH1.textContent = "Log in"
      textMdpOubli.textContent = "Mot de passe oublié"
      loginBloc.appendChild(loginH1)
      loginBloc.appendChild(formulaireLogin)
      loginBloc.appendChild(textMdpOubli)
      // Filiation des éléments
      // J'ajoute des attributs action et method à mes formulaires
      
      const labelMail = document.createElement("label")
      const mailInput = document.createElement("input")
      const labelMdp = document.createElement("label")
      const mdpInput = document.createElement("input")
      const boutonConnecter = document.createElement("input")
      formulaireLogin.appendChild(labelMail)
      formulaireLogin.appendChild(mailInput)
      formulaireLogin.appendChild(labelMdp)
      formulaireLogin.appendChild(mdpInput)
      formulaireLogin.appendChild(boutonConnecter)
      /* label + input crée & affilié. */
      labelMail.textContent = "E-mail"
      labelMdp.textContent = "Mot de passe"
      labelMail.setAttribute("for","mail")
      mailInput.setAttribute("type","email")
      mailInput.setAttribute("name","champMail")
      labelMdp.setAttribute("for","motdepasse")
      mdpInput.setAttribute("type","password")
      mdpInput.setAttribute("name","champMdp")
      boutonConnecter.setAttribute("type", "submit")
      boutonConnecter.setAttribute("value", "Se connecter")
      boutonConnecter.id = "boutonSeconnecter"
      
        /* Je me crée des variables pour sélectionner facilement des lignes précises du code html.
        Je crée en avance ma section "login" et je lui attribue un id pour la sélectionner facilement. */




        BoutonLogin.addEventListener ("click", function (){
          console.log("bouton Login bien cliqué")
          document.querySelector("#introduction").style.display = "none"
          document.querySelector("#portfolio").style.display = "none"
          document.querySelector("#contact").style.display = "none"
          document.querySelector("footer").style.display = "none"
          document.querySelector("#login").style.display = "block"
          
            BoutonLogin.style.fontWeight = "bold"
            BoutonProjets.style.fontWeight = "normal"


            /* ajouts d'attributs pour rendre les formulaires fonctionnels */
        
            console.log(BoutonLogin)
            console.log("fonction Login complétée")
            
        })
        
    
        BoutonProjets.addEventListener ("click", function (){
            console.log("bouton projets bien cliqué")
            document.querySelector("#introduction").style.display = "flex"
            document.querySelector("#portfolio").style.display = "block"
            document.querySelector("#contact").style.display = "block"
            document.querySelector("#login").style.display = "none"
            document.querySelector("footer").style.display = "block"
            BoutonLogin.style.fontWeight = "normal"
            BoutonProjets.style.fontWeight = "bold"
            /* Ma fonction projets, qui me sert à réafficher les éléments de la page principale.
            J'ai pris soin d'ajouter une ligne pour cacher la section #login. */
            console.log("fonction projets complétée")

             /* boutonConnecter.addEventListener ( "submit", function () {
                console.log("bouton connecter bien cliqué")
                submitEvent.target.champMail.value 
                // Besoin de créer une variable pour récupérer le nom du champ?
                submitEvent.target.champMdp.value
                fetch("http://localhost:5678/api/fetch/post/users/login").then
                (()=>{if 
                  ((champMail.value == true) && (champMdp.value == true)) {
                    console.log("retour à l'accueil")
                    document.querySelector("#introduction").style.display = "flex"
                    document.querySelector("#portfolio").style.display = "block"
                    document.querySelector("#contact").style.display = "block"
                    document.querySelector("#login").style.display = "none"
                    document.querySelector("footer").style.display = "block"
                    BoutonLogin.style.fontWeight = "normal"
                    BoutonProjets.style.fontWeight = "normal"
                    console.log("fonction retour à l'accueil effectuée")
                    // Code de retour à l'accueil
                } 
                else {
                    // Message d'erreure en modale (pop-up)
                    console.log("Email ou Mdp erroné")
             }}) 
                
            }) */
            formulaireLogin.addEventListener("submit", function(submitEvent) {
                submitEvent.preventDefault(); // pour éviter la soumission du formulaire par défaut
                
                const champMail = submitEvent.target.champMail.value;
                const champMdp = submitEvent.target.champMdp.value;
              
                fetch("http://localhost:5678/api/users/login", {
                  method: "POST",
                  body: JSON.stringify({ email: champMail, password: champMdp }),
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then(response => {
                  console.log(response)
                  if (response.ok) {
                    // connexion réussie
                    console.log("Connexion réussie !");
                    // insérer ici le code pour rediriger vers l'accueil
                    document.querySelector("#introduction").style.display = "flex"
                    document.querySelector("#portfolio").style.display = "block"
                    document.querySelector("#contact").style.display = "block"
                    document.querySelector("#login").style.display = "none"
                    document.querySelector("footer").style.display = "block"
                    BoutonLogin.style.fontWeight = "normal"
                    BoutonProjets.style.fontWeight = "normal"
                    console.log("retour à l'accueil effectuée")
                  } else {
                    // erreur de connexion
                    console.log("Email ou mot de passe incorrect !");
                    // insérer ici le code pour afficher un message d'erreur
                  }
                }).catch(error => {
                  // erreur lors de la requête
                  console.log("Erreur lors de la requête :", error);
                  // insérer ici le code pour afficher un message d'erreur
                });
              });
              
              

        })
        
        /* event.target.nomduchamp.value  submit.target.namechamp.value (value= ce qui est entré dans le champ)
        utiliser le fetch post /users/login après avoir récupéré les informations des formulaires 
        => .then if false => message erreure if true => page d'accueil
        => intégrer un console.log pour vérifier d'éventuelles erreures
         */

      }
))