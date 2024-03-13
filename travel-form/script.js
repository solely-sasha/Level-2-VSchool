const form = document["travel-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dietInputs = [];
  for (let i = 0; i < form.diet.length; i++) {
    if (form.diet[i].checked) {
      dietInputs.push(form.diet[i].value);
    }
    const diet = dietInputs;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = parseInt(form.age.value);
    const gender = form.gender.value;
    const location = form.location.value;
    const travelForm = `${firstName} ${lastName} ${age} ${gender} ${location} ${diet}`;
    alert(travelForm);
  }
});
