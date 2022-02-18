//Setting up different error messages
const errorMsg = {
  name: "Doit comporter au moins deux lettres",
  email: "L'adresse e-mail n'est pas valide",
  birthDate: "Veuillez renseigner votre date de naissance",
  tournament: "Veuillez remplir ce champ",
  cities: "Veuillez choisir une ville",
  conditions: "Vous devez acceptez les conditions d'utilisation pour continuer"
};

//DOM elements
const modalForm = document.getElementById("form");
const checkedBoxes = document.querySelectorAll(".checkbox-input");
const inputs = document.querySelectorAll("input[type=text]")
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const email = document.querySelector("#email");
const date = document.querySelector("#birthdate");
const tournament = document.querySelector("#quantity");
const radios = document.getElementsByName("location")
const conditions = document.querySelector("#checkbox1");
const validated = document.querySelector(".valid-form")
const radio = document.querySelector("#location1");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".bground");
const registerBtn = document.querySelector(".valid-btn");

//Regex
const letterRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const integerRegex = /^\d+$/;

//Close modal function
function closeModal() {
  closeBtn.addEventListener("click", () => {
    inputs.forEach((input) => input.value="");
    checkedBoxes.forEach((checkBox) => checkBox.checked = false);
    modal.style.display = "none";
  });
  registerBtn.addEventListener("click", () => {
    inputs.forEach((input) => input.value="");
    checkedBoxes.forEach((checkBox) => checkBox.checked = false);
    modal.style.display = "none";
  })
};

//Set error messages
function setError(element, error) {
  let target = element.parentNode;
  target.setAttribute("data-error", error);
  target.setAttribute("data-error-visible", true);
}

//Remove error messages
function removeError(element) {
  let target = element.parentNode;
  target.removeAttribute("data-error");
  target.removeAttribute("data-error-visible");
};

//Check form
function formCheck() {

  function namesValidation(name){
    if(letterRegex.test(name.value)){
      removeError(name);
      return true;
    } else {
      setError(name, errorMsg.name);
      return false;
    };
  };

  function emailValidation(email){
      if(emailRegex.test(email.value)) {
        removeError(email);
        return true;
      } else {
        setError(email, errorMsg.email);
        return false;
      };
    };
  
 function birthValidation(date) {
    if(!date.value) {
      setError(date, errorMsg.birthDate);
      return false;
    } else {
      removeError(date);
      return true;
    };
  };

  function testRadios(radios) {
    var checkedOne = Array.prototype.slice.call(radios).some(radio => radio.checked);
    if(checkedOne) {
      removeError(radio);
      return true;;
    } else {
      setError(radio, errorMsg.cities);
      return false;
    };
  };

  function tournamentQuantity(tournament) {
    if(integerRegex.test(tournament.value)) {
      removeError(tournament);
      return true;
    } else {
      setError(tournament, errorMsg.tournament);
      return false;
    };
  };

  function conditionsValidation(conditions) {
    if(!conditions.checked) {
      setError(conditions, errorMsg.conditions);
      return false;
    } else {
      removeError(conditions);
      return true;
    };
  };

  namesValidation(firstname), namesValidation(lastname)
  emailValidation(email)
  birthValidation(date)
  tournamentQuantity(tournament)
  testRadios(radios)
  conditionsValidation(conditions)
  
if(namesValidation(firstname) && namesValidation(lastname) && emailValidation(email) &&
  birthValidation(date) && tournamentQuantity(tournament) && testRadios(radios) &&
  conditionsValidation(conditions)) return true
};

function validate(e) {
  e.preventDefault();
    if(formCheck()) {
      modalForm.style.display="none";
      validated.style.display="flex";
    }
    else return false
}

closeModal()