import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'; // Importa funciones necesarias de Firestore

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const server = express();
server.use(cors());
server.use(express.json());

// Ruta para obtener cursos
server.get('/cursos', async (req, res) => {
  try {
    const cursosCol = collection(db, 'cursos'); // Obtén la colección de cursos
    const cursosSnapshot = await getDocs(cursosCol); // Obtén los documentos de la colección
    const cursos = cursosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Mapea los datos de los cursos
    res.status(200).json(cursos); // Envía los datos como respuesta
  } catch (error) {
    console.error('Error al obtener los cursos:', error); // Agrega logging para errores
    res.status(500).send('Error al obtener los cursos'); // Maneja el error
  }
});



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
