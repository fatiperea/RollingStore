function log() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const email = document.getElementById("email").value;

  if (user === "admin" && pass === "12345678" && email === "admin@admin.com") {
    window.location = "administracion.html";
  } else {
    alert("Usuario o contraseña incorrecta");
    document.getElementById("formLog").reset();
  }
}
