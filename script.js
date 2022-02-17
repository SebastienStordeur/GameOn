//Setting up different error messages
const errorMsg = {
  name: "Doit comporter au moins deux lettres",
  email: "L'adresse e-mail n'est pas valide",
  birthDate: "Veuillez renseigner votre date de naissance",
  tournament: "Veuillez remplir ce champ",
  cities: "Veuillez choisir une ville",
  conditions: "Vous devez acceptez les conditions d'utilisation pour continuer"
};

const checkedBoxes = document.querySelectorAll(".checkbox-input");
const inputs = document.querySelectorAll("input[type=text]")
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const email = document.querySelector("#email");
const date = document.querySelector("#birthdate");
const tournament = document.querySelector("#quantity");
const radios = document.getElementsByName("location")
const conditions = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");

//Regex
  //Lettres + quelques caractères spéciaux, accents et tirets + longueur de 2 
const letterRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const integerRegex = /^\d+$/;

//Close modal function
function closeModal() {
  const closeBtn = document.querySelector(".close");
  const modal = document.querySelector(".bground");

  closeBtn.addEventListener("click", () => {
    inputs.forEach((input) => input.value="");
    checkedBoxes.forEach((checkBox) => checkBox.checked = false);
    modal.style.display = "none";
  });
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

  function testNames(name){
    if(letterRegex.test(name.value)){
      removeError(name)
      return true
    } 
    else setError(name, errorMsg.name)
  }

  function testEmail(email){
      if(emailRegex.test(email.value)) {
        removeError(email) 
        return true
      }
      else setError(email, errorMsg.email);
    }
  

 function testBirthdate(date) {
    if(!date.value) {
      setError(date, errorMsg.birthDate)
      return false
    }
    else removeError(date)
  }

  function testRadios(radios) {
    
    for(let radio in radios) {
      if(radio.checked) {
        removeError(radios)
        return true
      };
    };
    setError(radios, errorMsg.cities)
  }

  function tournamentCount(tournament) {
      if(integerRegex.test(tournament.value)) {
        removeError(tournament)
        return true
      }
      else setError(tournament, errorMsg.tournament);
  };


  function conditionsValidation(conditions) {
    if(!conditions.checked) setError(conditions, errorMsg.conditions)
    else {
      removeError(conditions)
      return true
    };
  };

  testNames(firstname), testNames(lastname)
  testEmail(email)
  testBirthdate(date)
  tournamentCount(tournament)
  testRadios(radios)
  conditionsValidation(conditions)

  /* if(testEmail() && testBirthdate() && tournamentCount() && testRadios() && conditionsValidation()) return true */

};


function validate() {
    if(formCheck()) return true
    else return false
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validate()
}) 





closeModal()