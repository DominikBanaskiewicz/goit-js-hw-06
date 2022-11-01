const form = document.querySelector(".login-form");
//console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill  all the fields!");
  }
  console.log(event.currentTarget.elements);
  event.currentTarget.reset();
});
