const formRef = document.querySelector("form.login-form");

formRef.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all fields");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  formRef.reset();
});

