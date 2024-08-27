// Referencia al contenedor donde se mostrarán los cursos
const cursosLista = document.getElementById('cursos-lista');

// Fetch para obtener los cursos desde la API del backend
fetch('http://localhost:3000/cursos')
  .then(response => response.json())
  .then(cursos => {
    cursos.forEach(curso => {
      const cursoDiv = document.createElement('div');
      cursoDiv.classList.add('curso');

      // Verifica si el precio es 0 y ajusta el texto del precio en consecuencia
      const precioTexto = curso.Precio === 0 ? 'Gratis' : `$${curso.Precio}`;
  
        // Inserta la imagen, el título y la información del curso
        cursoDiv.innerHTML = `
        <div class="curso__imagen">
            <img src="img/${curso.Imagen}.jpg" alt="Imagen del curso">
        </div>
        <div class="curso__informacion">
            <h4 class="no-margin">${curso.Titulo}</h4>
            <p class="curso__label">Precio: 
                <span class="curso__info">${precioTexto}</span>
            </p>
            <p class="curso__label">Cupo: 
                <span class="curso__info">${curso.Cupo}</span>
            </p>
            <p class="curso__descripcion">
                ${curso.Descripcion}
            </p>
        </div>
        `;

      cursosLista.appendChild(cursoDiv);
    });
  })
  .catch(error => console.error('Error al obtener los cursos:', error));


































  