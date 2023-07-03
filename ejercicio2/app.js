async function cargarenTabla() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const results = await respuesta.json();


  let contenedor = document.getElementById('contenedor');
  
  results.forEach((resultados) => {
   
    let tabla = document.getElementById("tabla");

    let tr = document.createElement("tr");

    let celda = document.createElement("td");
    celda.textContent = resultados.id;
    celda.style.border = "1px solid";
    tr.appendChild(celda);

    let celda2 = document.createElement("td");
    celda2.textContent = resultados.name;
    celda2.style.border = "1px solid";
    tr.appendChild(celda2);

    let celda3 = document.createElement("td");
    celda3.textContent = resultados.address.city;
    celda3.style.border = "1px solid";
    tr.appendChild(celda3);

    tabla.appendChild(tr);
  });
  document.body.appendChild(contenedor);
  document.contenedor.appendChild(tabla);
}

cargarenTabla();
