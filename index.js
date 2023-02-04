function checkAge() {
  const message = document.getElementById("show-error");
  message.innerHTML = "";
  let x = document.getElementById("age-field").value;
  try {
    if (x == "") {
      throw "empty";
    } else if (x < 18) {
      throw "below 18";
    } else if (x >= 18 && x <= 30) {
      alert("Successfully submitted!");
      document.getElementById("age-field").value = "";
    } else if (x > 30) {
      throw "above 30";
    }
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
}
