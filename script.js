// ECOUTE DU BOUTON ET LANCEMENT DU SCRIPT APRES CHARGEMENT DU DOM
document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("button");
  button.addEventListener("click", function () {
    validationEmail();
    validationPass();
  });
});
// CREATION DE DEUX FONCTIONS DISTINCTES POUR PLUS DE LISIBILITE
// FONCTION POUR VERIFIER EMAIL VIDE OU BON FORMAT
function validationEmail() {
  let emailInput = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let email = emailInput.value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // FORMAT EMAIL !!! NE VERIFIE QUE LA SYNTAXE

  if (email === "") {
    // SI MAIL VIDE, BORDURE INPUT ROUGE ET MESSAGE D'ALERTE
    emailInput.style.borderColor = "red";
    emailError.innerText = "	\u26a0 L'adresse e-mail est requise.";
    emailError.style.color = "red";
  } else if (!emailRegex.test(email)) {
    // SI FORMAT INVALIDE, BORDURE INPUT ROUGE ET MESSAGE D'ALERTE
    emailInput.style.borderColor = "red";
    emailError.innerText = "	\u26a0 L'adresse e-mail n'est pas valide.";
    emailError.style.color = "red";
  } else {
    // SI TOUT EST OK, BORDURES PAR DEFAUT
    emailInput.style.borderColor = "";
    emailError.innerText = "";
  }
}

// FONCTION POUR VERIFIER QUE LE MOT DE PASSE N'EST PAS VIDE
function validationPass() {
  let passInput = document.getElementById("pass");
  let passError = document.getElementById("passError");
  let password = passInput.value;

  if (password === "") {
    // SI PASSWORD EST VIDE, BORDURE INPUT ROUGE ET MESSAGE D'ALERTE
    passInput.style.borderColor = "red";
    passError.innerText = "	\u26a0 Le mot de passe est requis.";
    passError.style.color = "red";
  } else {
    // SI TOUT EST OK, BORDURES PAR DEFAUT
    passInput.style.borderColor = "";
    passError.innerText = "";
  }
}
