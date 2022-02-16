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
/* const inputs = document.querySelectorAll(".text-control"); */
const checkedBoxes = document.querySelectorAll(".checkbox-input");
const inputs = document.querySelectorAll("input[type=text]")



//Regex
  //Lettres + quelques caractères spéciaux, accents et tirets + longueur de 2 
const letterRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

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
      else {
        setError(e.target, errorMsg.name)
      }
    })
  })
};

formCheck()








closeModal()