let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let message = document.getElementById("message");
let address = document.getElementById("address");
let phoneNumber = document.getElementById("phoneNumber");
let password = document.getElementById("password");
let errorMsg = document.getElementById("error3");
let nameMsg = document.getElementById("error1");
let secondMsg = document.getElementById("error2");
let phoneMsg = document.getElementById("error4");
let cnfMsg = document.getElementById("error5");
let cnfPass = document.getElementById("confirmPassword");

function validateForm() {
  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !message.value ||
    !address.value ||
    !phoneNumber.value ||
    !password.value ||
    !cnfPass.value
  ) {
    alert("All fields are required!");
    return false;
  }

  let alertMessage = "Submitted Values:\n\n";
  alertMessage += "First Name: " + firstName.value + "\n";
  alertMessage += "Last Name: " + lastName.value + "\n";
  alertMessage += "Email: " + email.value + "\n";
  alertMessage += "Message: " + message.value + "\n";
  alertMessage += "Address: " + address.value + "\n";
  alertMessage += "Phone Number: " + phoneNumber.value + "\n";

  alert(alertMessage);

  document.getElementById("myForm").reset();

  return false;                           
}
email.onblur = function () {
  if (!email.value.includes("@")) {
    console.log("Inside function");
    email.classList.add("invalid");
    errorMsg.innerHTML = "Please enter a correct email.";
  } else {
    email.classList.remove("invalid");
    errorMsg.innerHTML = "";
    console.log("corrected");
  }
};

firstName.onblur = function () {
  // const firstNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const firstNameRegex  = new  RegExp('\D','g');
  console.log("abc",firstName, typeof firstName);
  console.log("!firstNameRegex.test(firstName)",!firstNameRegex.test(firstName));
  console.log("firstNameRegex.test(firstName)",firstNameRegex.test(firstName));
  if (parseInt(firstName.value)&&!firstNameRegex.test(firstName.value)) {
    console.log("Inside function");
    firstName.classList.add("invalid");
    nameMsg.innerHTML = "Please enter a correct Name.";
  } else{
   firstName.classList.remove("invalid");
    nameMsg.innerHTML = "";
    console.log("corrected");
  }
};

lastName.onblur = function () {
  const nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(lastName.value)) {
    console.log("Inside function");
    lastName.classList.add("invalid");
    secondMsg.innerHTML = "Please enter a correct Last Name.";
  } else {
    lastName.value.classList.remove("invalid");
    secondMsg.innerHTML = "";
    console.log("corrected");
  }
};

phoneNumber.onblur = function () {
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber.value)) {
    console.log("Inside function");
    phoneNumber.classList.add("invalid");
    phoneMsg.innerHTML = "Please enter a correct number.";
  } else {
    phoneNumber.value.classList.remove("invalid");
    phoneMsg.innerHTML = "";
    console.log("corrected");
  }
};

cnfPass.onblur = function(){
  if (password.value!==cnfPass.value){
    console.log("password.value!==cnfPass.value >>>",password.value!==cnfPass.value)
    cnfPass.classList.add("invalid");
    cnfMsg.innerHTML="Passwords don't Match"
  } else{
    cnfPass.value.classList.remove("invalid");
    phoneMsg.innerHTML=""
  }
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var togglePasswordIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordIcon.innerHTML = "&#128064;";
  } else {
    passwordInput.type = "password";
    togglePasswordIcon.innerHTML = "&#128065;";
  }
}

