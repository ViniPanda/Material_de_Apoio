import { db } from './firebase.js';

const procedimentosRef = db.collection('procedimentos');
const idDocumento = '1';

const carregarProcedimentos = async () => {
  const procedimentos = await procedimentosRef.get();
  const listaProcedimentos = document.getElementById('procedimentos-lista');

  procedimentos.forEach((doc) => {
    const procedimento = doc.data();
    const item = document.createElement('li');
    item.textContent = procedimento.titulo;
    item.innerHTML += `
      <button class="btn-editar" data-id="1">Editar</button>
      <button class="btn-excluir" data-id="1">Excluir</button>
    `;
    listaProcedimentos.appendChild(item);
  });
};

carregarProcedimentos();

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-editar')) {
    const id = 1;
    editarProcedimento(id);
  } else if (e.target.classList.contains('btn-excluir')) {
    const id = 1;
    excluirProcedimento(id);
  }
});

const editarProcedimento = async (id) => {
    const procedimentoRef = db.collection('procedimentos').doc(id);
    const procedimento = await procedimentoRef.get();
    if (procedimento.exists) {
      const titulo = procedimento.data().titulo;
      const descricao = procedimento.data().descricao;
      document.getElementById('titulo').value = titulo;
      document.getElementById('descricao').value = descricao;
      document.getElementById('imagem').value = '';
      document.getElementById('btn-salvar').textContent = 'Atualizar';
      document.getElementById('btn-salvar').setAttribute('data-id', id);
    }
  };
  

const excluirProcedimento = async (id) => {
  const procedimentoRef = db.collection('procedimentos').doc(id);
  await procedimentoRef.delete();
  carregarProcedimentos();
};

document.getElementById('btn-salvar').addEventListener('click', salvarProcedimento);

function salvarProcedimento(e) {
    const id = document.getElementById('btn-salvar').getAttribute('data-id');
  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;
  const imagem = document.getElementById('imagem').files[0];

  if (id) {
    db.collection('procedimentos').doc(id).update({
        titulo,
        descricao,
        imagem: imagem.name,
      })
      .then(() => {
        console.log('Procedimento atualizado!');
        carregarProcedimentos();
      })
      .catch((error) => {
        console.error('Erro ao atualizar procedimento:', error);
      });
  } else {
    db.collection('procedimentos').add({
        titulo,
        descricao,
        imagem: imagem.name,
      })
      .then(() => {
        console.log('Procedimento salvo!');
        carregarProcedimentos();
      })
      .catch((error) => {
        console.error('Erro ao salvar procedimento:', error);
      });
  }
}