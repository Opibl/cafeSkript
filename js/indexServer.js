
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "you",
    authDomain: "you",
    projectId: "you",
    storageBucket: "you",
    messagingSenderId: "you",
    appId: "you"
  };
  
  
  
  
  
  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  

  
// Referencia al contenedor donde se mostrarán los cursos
const cursosLista = document.getElementById('cursos-lista');

// Obtén los datos de la colección "cursos" y muéstralos en la página
db.collection("cursos").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      // Crea un nuevo elemento div para cada curso
      const cursoDiv = document.createElement('div');
      cursoDiv.classList.add('curso');

      // Obtén los datos del documento
      const cursoData = doc.data();
      const precio = cursoData.Precio;
      // Inserta la imagen, el título y la información del curso

      // Verifica si el precio es 0 y ajusta el texto del precio en consecuencia
      const precioTexto = precio === 0 ? 'Gratis' : `$${precio}`;
  
      cursoDiv.innerHTML = `
          <div class="curso__imagen">
              <img src="img/${doc.data().Imagen}.jpg" alt="Imagen del curso">
          </div>
          <div class="curso__informacion">
              <h4 class="no-margin">${doc.data().Titulo}</h4>
              <p class="curso__label">Precio: 
                  <span class="curso__info">${precioTexto}</span>
              </p>
              <p class="curso__label">Cupo: 
                  <span class="curso__info">${doc.data().Cupo}</span>
              </p>

              <a href="cursos.html" class="boton boton--secundario">Más Información sobre nuestros cursos</a>
          </div>
      `;

      // Añade el curso al contenedor en el DOM
      cursosLista.appendChild(cursoDiv);
  });
});


