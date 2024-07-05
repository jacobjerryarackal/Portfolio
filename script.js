document
  .getElementById("enquiryForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    if (validateForm()) {
      sndMsg();
      document.getElementById("successMessage").innerText =
        "Form submitted successfully!";
      document.getElementById("successMessage").style.display = "block";
    }
  });

function sndMsg() {
  const form = document.getElementById("enquiryForm");
  
  
  emailjs.sendForm("service_32o0jhg", "template_jgfpe38", form).then(
    function (result) {
      alert("Success!! Your email has sented.");
      console.log(result.text);
      form.reset();
      clearErrors(); 
    },
    function (error) {
      alert("Error! Something went wrong.");
      console.log(error.text);
    }
  );
}

function validateForm() {
  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    showError("nameError", "Name is required");
    isValid = false;
  }

  if (email === "") {
    showError("emailError", "Email is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError("emailError", "Invalid email format");
    isValid = false;
  }

  if (phone === "") {
    showError("phoneError", "Phone number is required");
    isValid = false;
  } else if (!validatePhone(phone)) {
    showError("phoneError", "Invalid phone number format");
    isValid = false;
  }

  if (subject === "") {
    showError("subjectError", "Subject is required");
    isValid = false;
  }

  if (message === "") {
    showError("messageError", "Message is required");
    isValid = false;
  }

  return isValid;
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(phone);
}

function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.innerText = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.style.display = "none";
    document.getElementById("successMessage").style.display = "none";
  });
  
}


const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});