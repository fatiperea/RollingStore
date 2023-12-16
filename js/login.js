function log() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const email = document.getElementById("email").value;
  //   const initBtn = document.getElementById("initBtn");
  
    if (user == "admin" && pass == "123" && email == "@") {
      window.location = "administracion.html";
    } else {
      alert("Usuario o contraseña incorrecta");
      document.getElementById("formLog").reset();
  
    }
  }
  
  
  // initBtn.addEventListener('click', (e) => {
  //     e.preventDefault()
  //     log()
  // }
  
  // initBtn.addEventListener('click', (e) => {
  //     e.preventDefault()
  //     const data = {
  //         user: user.value,
  //         pass: pass.value
  //     }
  //     console.log(data)
  // })