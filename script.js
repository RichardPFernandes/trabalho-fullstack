function enviarFormulario(event) {
  event.preventDefault();
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;

  if (!nome || !email || !telefone) {
    alert('Preencha todos os campos');
    return;
  }
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regex.test(email)) {
    alert('Email inválido');
    return;
  }

  var regex = /^\(?\d{2}\)?\s?\d{5}-\d{4}$/;
  if (!regex.test(telefone)) {
    alert('Telefone inválido');
    return;
  }

  alert('Formulário enviado com sucesso');
  limparFormulario();

  // Enviar resposta para outra página
  var resposta = {
    nome: nome,
    email: email,
    telefone: telefone
  };

  var respostaJson = JSON.stringify(resposta);
  localStorage.setItem('resposta', respostaJson);
  window.location.href = 'resultado.html';

}
function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefone').value = '';
}

function mascaraTelefone(event) {
  var telefone = event.target.value;
  var regex = /^(\d{2})(\d{5})(\d{4})$/;
  var telefoneFormatado = telefone.replace(regex, '($1) $2-$3');
  event.target.value = telefoneFormatado;
}