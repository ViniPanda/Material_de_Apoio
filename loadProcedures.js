// loadProcedures.js

import { db } from './firebaseConfig.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Função para carregar os procedimentos do Firestore
const loadProcedures = async () => {
    const proceduresList = document.getElementById("procedures-list");

    try {
        const querySnapshot = await getDocs(collection(db, "procedures"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const procedureItem = document.createElement("div");
            procedureItem.innerHTML = `<h3>${data.title}</h3><p>${data.content}</p>`;
            proceduresList.appendChild(procedureItem);
        });
    } catch (error) {
        console.error("Erro ao carregar procedimentos:", error);
    }
};

// Chama a função para carregar os procedimentos ao carregar a página
window.addEventListener("DOMContentLoaded", loadProcedures);
