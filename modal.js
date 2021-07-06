function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// fermer la fenetre
function fermer() {
  modalbg.style.display = "none";
}
// valider le prenom
reserve.first.addEventListener ("change", function () {
  validfirst (this);
});
const validfirst = function (inputfirst) {
  expfirst = /^[A-Za-z-]{2,20}$/;
  window.testfirst = expfirst.test(inputfirst.value);
  console.log(window.testfirst);
};
// valider le nom
reserve.last.addEventListener ("change", function () {
  validlast (this);
});
const validlast = function (inputlast) {
  explast = /^[A-Za-z-]{2,20}$/;
  window.testlast = explast.test(inputlast.value);
  console.log(window.testlast);
};
// valider l'email
reserve.email.addEventListener ("change", function () {
  validemail (this);
});
const validemail = function (inputemail) {
  expemail = /^([a-zA-Z0-9]+(([\.\-\_]?[a-zA-Z0-9]+)+)?)\@(([a-zA-Z0-9]+[\.\-\_])+[a-zA-Z]{2,4})$/;
  window.testemail = expemail.test(inputemail.value);
  console.log(window.testemail);
};
// valider la date de naissance
reserve.birthdate.addEventListener ("change", function () {
  validbirthdate (this);
});
const validbirthdate = function (inputbirthdate) {
  expbirthdate = /^\d{4}-\d\d-\d\d$/;
  window.testbirthdate = expbirthdate.test(inputbirthdate.value);
  console.log(window.testbirthdate);
};
// valider le nombre de concours
reserve.quantity.addEventListener ("change", function () {
  validquantity (this);
});
const validquantity = function (inputquantity) {
  expquantity = /^[0-9]{1,2}$/;
  window.testquantity = expquantity.test(inputquantity.value);
  console.log(window.testquantity);
};
// valider la selection de type radio
reserve.quantity.addEventListener ("click", function () {
  validlocation (this);
});
const validlocation = function () {
  window.testlocation = document.querySelector('input[name=location]:checked');
  console.log(window.testlocation);
};
// valider le formulaire
function validate() {
  if ((window.testfirst)&&(window.testlast)&&(window.testemail)&&(window.testbirthdate)&&(window.testquantity)) {
    return true
  }
  else {
    return false
  }
}


