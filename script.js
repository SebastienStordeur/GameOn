//Setting up different error messages
const errorMsg = {
  name: "Doit comporter au moins deux lettres",
  email: "L'adresse e-mail n'est pas valide",
  birthDate: "Veuillez renseigner votre date de naissance",
  tournament: "Veuillez remplir ce champ",
  cities: "Veuillez choisir une ville",
  conditions: "Vous devez acceptez les conditions d'utilisation pour continuer"
};
const form = document.querySelector(".formData");
const checkedBoxes = document.querySelectorAll(".checkbox-input");
const inputs = document.querySelectorAll("input[type=text]");
const email = document.querySelector("input[type=email]");
const date = document.querySelector("input[type=date]");
const tournament = document.querySelector("#quantity");
const radios = document.querySelectorAll("input[type=radio]")


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


  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      if(letterRegex.test(input.value)) removeError(e.target)
      else setError(e.target, errorMsg.name)
    })
  })

  function testEmail(){
    email.addEventListener("change", (e) => {
      if(emailRegex.test(email.value)) removeError(e.target)
      else setError(e.target, errorMsg.email);
    })
  }

  function testBirthdate() {
    let birthDate = new Date(date.value)
  }

  function testRadios() {
    radios.addEventListener("change", (e) => {
      for(let radio of radios) {
        if(radio.checked) removeError(e.target)
      }
      setError(radios, errorMsg.cities)
    })
  }

  function tournamentCount() {
    tournament.addEventListener("change", (e) => {
      if(integerRegex.test(tournament.value)) removeError(e.target)
      else setError(e.target, errorMsg.tournament);
    });
  };

  testEmail()
  testBirthdate()
  tournamentCount()
  testRadios()
};

formCheck()








closeModal()