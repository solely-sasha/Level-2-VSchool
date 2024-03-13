const addForm = document["add-form"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const num1 = addForm.num1.value;
  const num2 = addForm.num2.value;
  const result = parseInt(num1) + parseInt(num2);
  const span = document.getElementById("result");
  span.textContent = result;
});

const subtractForm = document["subtract-form"];

subtractForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const num3 = subtractForm.num3.value;
  const num4 = subtractForm.num4.value;
  const subtractResult = parseInt(num3) - parseInt(num4);
  const span2 = document.getElementById("result2");
  span2.textContent = subtractResult;
});

const multiplyForm = document["multiply-form"];

multiplyForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const num5 = multiplyForm.num5.value;
  const num6 = multiplyForm.num6.value;
  const multiplyResult = parseInt(num5) * parseInt(num6);
  const span3 = document.getElementById("result3");
  span3.textContent = multiplyResult;
});

// const form = document["my-form"];

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const firstName = form.firstName.value;
//   const lastName = form.lastName.value;
//   form.firstName.value = "";
//   form.lastName.value = "";

//   const h1 = document.createElement("h1");
//   h1.textContent = `${firstName} ${lastName}`;
//   document.getElementsByTagName("body")[0].append(h1);
// });
