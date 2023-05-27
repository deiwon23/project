 function popUp(){
  alert("Hi, Thank you for purchasing the item from our store.");

  
  var emailLabel = document.getElementByid("email-label");
 
}

  function validateEmail(){
    emailLabel.style.bottom = "45px";

    if(!emailField.value.match(/[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.innerHTML = "Plase enter a valid email";
      return false;
    }
  }