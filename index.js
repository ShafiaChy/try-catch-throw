function checkAge() {
  const message = document.getElementById("show-error");
  message.innerHTML = "";
  let x = document.getElementById("age-field").value;
  try {
    if (x == "") {
      throw "Empty";
    } else if (x < 18) {
      throw "Below 18";
    } else if (x >= 18 && x <= 30) {
      alert("Successfully submitted!");
      document.getElementById("age-field").value = "";
    } else if (x > 30) {
      throw "Above 30";
    }
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
}
