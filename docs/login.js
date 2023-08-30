const boutonModifierProjets = document.createElement("button");
boutonModifierProjets.id = "boutonModifierProjets"

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
    const blocModeEdition = document.createElement("div")
    // label + input crée & affilié.
    const labelMail = document.createElement("label")
    const mailInput = document.createElement("input")
    const labelMdp = document.createElement("label")
    const mdpInput = document.createElement("input")
    const boutonConnecter = document.createElement("input")
    const modaleConnexionRefusée = document.createElement("aside")
    const blocModale = document.createElement("div")
    const messageConnexionRefusée = document.createElement("h1")
    const closeModalButton = document.createElement("button")
    const boutonLogout = document.createElement("li")
    const ul = document.querySelector("ul")
    const header = document.querySelector("header")
    const imgIntroduction = document.querySelector("#introduction figure")
    const mesProjetsH2 = document.querySelector("#portfolio h2")
    const Filtres = document.querySelector("#filtres-travaux")
    //création des éléments mode édition
    const iconeModifier = document.createElement("i")
    const boutonPublierChangement = document.createElement("button")
    const iconeModifierIntro = document.createElement("i")
    const boutonModifierPresentation = document.createElement("button")
    const iconeModifierProjets = document.createElement("i")
    main.appendChild(loginBloc)
    loginBloc.id= "login"
    modaleConnexionRefusée.id = "modaleConnexionRefusée"
    document.querySelector("#login").style.display = "none"
    const loginH1 = document.createElement("h2")
    const textMdpOubli = document.createElement("p")
    // Ajout du texte.
    loginH1.textContent = "Log in"
    textMdpOubli.textContent = "Mot de passe oublié"
    messageConnexionRefusée.textContent = "Erreur dans l'identifiant ou le mot de passe"
    closeModalButton.textContent = "Fermer"
    boutonLogout.textContent = "logout"
    //Ajout Texte des éléments d'éditions
    blocModeEdition.textContent = "Mode édition"
    boutonPublierChangement.textContent = "publier les changements"
    boutonModifierPresentation.textContent = "modifier"
    boutonModifierProjets.textContent = "modifier"
    // Filiation des éléments
    loginBloc.appendChild(loginH1)
    loginBloc.appendChild(formulaireLogin)
    formulaireLogin.appendChild(labelMail)
    formulaireLogin.appendChild(mailInput)
    formulaireLogin.appendChild(labelMdp)
    formulaireLogin.appendChild(mdpInput)
    formulaireLogin.appendChild(boutonConnecter)
    loginBloc.appendChild(textMdpOubli)
    loginBloc.appendChild(modaleConnexionRefusée)
    modaleConnexionRefusée.appendChild(blocModale)
    blocModale.appendChild(messageConnexionRefusée)
    messageConnexionRefusée.appendChild(closeModalButton)
    mesProjetsH2.appendChild(boutonModifierProjets)
    ul.appendChild(boutonLogout)
    header.appendChild(blocModeEdition)
    // Affiliation des éléments d'éditions
    blocModeEdition.appendChild(boutonPublierChangement)
    blocModeEdition.appendChild(iconeModifier)
    imgIntroduction.appendChild(boutonModifierPresentation)
    boutonModifierPresentation.appendChild(iconeModifierIntro)
    boutonModifierProjets.appendChild(iconeModifierProjets)
    
    labelMail.textContent = "E-mail"
    labelMdp.textContent = "Mot de passe"
    // J'ajoute des attributs action et method à mes éléments de formulaires
    labelMail.setAttribute("for","mail")
    mailInput.setAttribute("type","email")
    mailInput.setAttribute("name","champMail")
    labelMdp.setAttribute("for","motdepasse")
    mdpInput.setAttribute("type","password")
    mdpInput.setAttribute("name","champMdp")
    boutonConnecter.setAttribute("type", "submit")
    boutonConnecter.setAttribute("value", "Se connecter")
    modaleConnexionRefusée.setAttribute("class","modal")
    modaleConnexionRefusée.setAttribute("aria-hidden","true")
    modaleConnexionRefusée.setAttribute("role","dialog")
    blocModale.setAttribute("class", "modal-wrapper")
    boutonConnecter.id = "boutonSeconnecter"
    // Attributs des éléments d'éditions
    iconeModifier.setAttribute("class", 'fa-regular fa-pen-to-square')
    iconeModifier.setAttribute("style", 'color: #ffffff;')
    iconeModifierIntro.setAttribute("class", 'fa-regular fa-pen-to-square')
    iconeModifierIntro.setAttribute("style", 'color: #000000;')
    iconeModifierProjets.setAttribute("class", 'fa-regular fa-pen-to-square')
    iconeModifierProjets.setAttribute("style", 'color: #000000;')
    
    // Condition d'authentification pour afficher le mode édition + logout
    var token = localStorage.getItem('token')
    if (token) {
      console.log("oui")
      boutonLogout.style.display = "flex"
      blocModeEdition.style.display = "flex"
      boutonModifierPresentation.style.display = "flex"
      boutonModifierProjets.style.display = "flex"
      BoutonLogin.style.display = "none"
      Filtres.style.display = "none"
      //Fonction deconnexion
      boutonLogout.addEventListener("click", function () {
        localStorage.removeItem('token')
        boutonLogout.style.display = "none"
        blocModeEdition.style.display = "none"
        boutonModifierPresentation.style.display = "none"
        boutonModifierProjets.style.display = "none"
        BoutonLogin.style.display = "flex"
        Filtres.style.display = "flex"
        console.log(localStorage.token)
      })
    } else {
      console.log("non")
      boutonLogout.style.display = "none"
      blocModeEdition.style.display = "none"
      boutonModifierPresentation.style.display = "none"
      boutonModifierProjets.style.display = "none"
      BoutonLogin.style.display = "flex"
      Filtres.style.display = "flex"

    }
    // fonction login
    BoutonLogin.addEventListener ("click", function (){
      console.log("bouton Login bien cliqué")
      document.querySelector("#introduction").style.display = "none"
      document.querySelector("#portfolio").style.display = "none"
      document.querySelector("#contact").style.display = "none"
      document.querySelector("footer").style.display = "none"
      document.querySelector("#login").style.display = "block"
      document.querySelector("#modaleConnexionRefusée").style.display = "none"
      // petits changements visuels pour indiquer dans quelle section on se trouve
      BoutonLogin.style.fontWeight = "bold"
      BoutonProjets.style.fontWeight = "normal"
      
      console.log(BoutonLogin)
      console.log("fonction Login complétée")
      
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
        }).then(response => response.json().then ((response) => {
          console.log(response)
          if (response.userId == 1) {
            // connexion réussie
            console.log("Connexion réussie !");
            // insérer ici le code pour rediriger vers l'accueil
            document.querySelector("#introduction").style.display = "flex"
            document.querySelector("#portfolio").style.display = "block"
            document.querySelector("#contact").style.display = "block"
            document.querySelector("#login").style.display = "none"
            document.querySelector("footer").style.display = "block"
            //Suite du code login
            BoutonLogin.style.fontWeight = "normal"
            BoutonProjets.style.fontWeight = "normal"
            localStorage.setItem('token', response.token)
            boutonLogout.style.display = "flex"
            blocModeEdition.style.display = "flex"
            boutonModifierPresentation.style.display = "flex"
            boutonModifierProjets.style.display = "flex"
            BoutonLogin.style.display = "none"
            Filtres.style.display = "none"
            console.log(localStorage.token)
            console.log("retour à l'accueil effectuée")
            //Fonction deconnexion
            boutonLogout.addEventListener("click", function () {
              localStorage.removeItem('token')
              boutonLogout.style.display = "none"
              blocModeEdition.style.display = "none"
              boutonModifierPresentation.style.display = "none"
              boutonModifierProjets.style.display = "none"
              BoutonLogin.style.display = "flex"
              Filtres.style.display = "flex"
              console.log(localStorage.token)
            })
              } else {
                // erreur de connexion
                console.log("Email ou mot de passe incorrect !");
                // insérer ici le code pour afficher un message d'erreur
                document.querySelector("#modaleConnexionRefusée").style.display = "block"
              }
            }).catch(error => {
              // erreur lors de la requête
              console.log("Erreur lors de la requête :", error);
              // insérer ici le code pour afficher un message d'erreur
            }));
            
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
              });
              
              

        })
        closeModalButton.addEventListener("click", function () {
          document.querySelector("#modaleConnexionRefusée").style.display = "none"
        })
        
        
      }
))