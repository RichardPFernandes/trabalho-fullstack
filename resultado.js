function onGetPage() {
  var dados = JSON.parse(localStorage.getItem('resposta'));
  
  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var telefone = document.getElementById('telefone');

  nome.innerText = dados.nome;
  email.innerText = dados.email;
  telefone.innerText = dados.telefone;

  localStorage.removeItem('resposta');

}

onGetPage();

function voltar() {
  window.location.href = 'index.html';
}