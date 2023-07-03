let boton = document.getElementById("boton");
boton.onclick = VerUsuario;

async function VerUsuario() {
  let campoId = document.getElementById("id_usuario");
  let valorId = campoId.value;

  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const results = await respuesta.json();

  results.forEach((resultados) => {
    if (valorId == resultados.id) {
      let p = document.createElement("p");
      let p1 = document.createElement("p");

      p.setAttribute("class", "parrafos");
      p1.setAttribute("class", "parrafos");

      p.textContent = "El nombre es: " + resultados.name;
      p1.textContent = "El telefono es: " + resultados.phone;

      document.body.appendChild(p);
      document.body.appendChild(p1);
    }
  });
}
