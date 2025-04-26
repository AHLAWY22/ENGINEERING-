function login() {
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  if (username === "ENG" && password === "1234") {
    window.location.href = "eng.html";
    return false;
  } else {
    alert("Incorrect Username or Password!");
    return false;
  }
}