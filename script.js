let listaDeFilmes = [
  "Interestelar (2014)",
  "Clube da Luta (1999)",
  "Parasita (2019)"
];

let USUARIO_VALIDO = "aluno";
let SENHA_VALIDA = "fiap2025";

let timerFeedback = null;

let inputUsuario = document.getElementById("input-usuario");
let inputSenha = document.getElementById("input-senha");
let btnLogin = document.getElementById("btn-login");
let msgErroLogin = document.getElementById("mensagem-erro-login");
let secaoLogin = document.getElementById("secao-login");
let secaoCrud = document.getElementById("secao-crud");
let inputFilme = document.getElementById("input-filme");
let btnAdicionarFim = document.getElementById("btn-adicionar-fim");
let btnAdicionarInicio = document.getElementById("btn-adicionar-inicio");
let btnLogout = document.getElementById("btn-logout");
let listaFilmesEl = document.getElementById("lista-filmes");
let msgFeedback = document.getElementById("mensagem-feedback");
let estadoVazio = document.getElementById("estado-vazio");
let contadorFilmes = document.getElementById("contador-filmes");
let headerUsuario = document.getElementById("header-usuario");


function coletarUsuario() {
  return inputUsuario.value;
}

function coletarSenha() {
  return inputSenha.value;
}

function coletarNomeFilme() {
  return inputFilme.value;
}

function validarCredenciais(usuario, senha) {
  if (usuario.trim() === "" || senha.trim() === "") {
    return "Preencha todos os campos antes de continuar.";
  }
  if (usuario.trim() !== USUARIO_VALIDO || senha.trim() !== SENHA_VALIDA) {
    return "Utilizador ou palavra-passe incorretos. Tente novamente.";
  }
  return true;
}

function validarNomeFilme(nomeFilme) {
  if (nomeFilme.trim() === "") {
    return "O nome do filme não pode estar vazio.";
  }
  return true;
}


function exibirErroLogin(mensagem) {
  msgErroLogin.textContent = mensagem;
  msgErroLogin.classList.add("visivel");
}

function limparErroLogin() {
  msgErroLogin.textContent = "";
  msgErroLogin.classList.remove("visivel");
}

function exibirFeedback(mensagem, tipo) {
  if (timerFeedback !== null) {
    clearTimeout(timerFeedback);
  }

  msgFeedback.classList.remove("tipo-sucesso", "tipo-aviso", "tipo-info", "visivel");

  let classTipo = "tipo-info";
  if (tipo === "sucesso") {
    classTipo = "tipo-sucesso";
  } else if (tipo === "aviso") {
    classTipo = "tipo-aviso";
  }

  msgFeedback.textContent = mensagem;
  msgFeedback.classList.add(classTipo, "visivel");

  timerFeedback = setTimeout(function () {
    msgFeedback.classList.remove("visivel");
  }, 3500);
}

function exibirSecaoCrud(usuario) {
  secaoLogin.classList.add("oculto");
  secaoCrud.classList.remove("oculto");
  headerUsuario.textContent = `Olá, ${usuario}`;
}

function exibirSecaoLogin() {
  secaoCrud.classList.add("oculto");
  secaoLogin.classList.remove("oculto");
  inputUsuario.value = "";
  inputSenha.value = "";
  limparErroLogin();
}

function renderizarLista() {
  listaFilmesEl.innerHTML = "";

  let total = listaDeFilmes.length;
  if (total === 1) {
    contadorFilmes.textContent = "1 filme";
  } else {
    contadorFilmes.textContent = `${total} filmes`;
  }

  if (total === 0) {
    estadoVazio.classList.remove("oculto");
    return;
  }
  estadoVazio.classList.add("oculto");

  let htmlTotal = "";

  for (let i = 0; i < listaDeFilmes.length; i++) {
    htmlTotal += `
      <li class="item-filme" data-indice="${i}">
        <span class="item-numero">${i + 1}</span>
        <span class="item-nome">${listaDeFilmes[i]}</span>
        <div class="item-acoes">
          <button class="btn-editar" title="Editar filme">
            <span>Editar</span>
          </button>
          <button class="btn-remover" title="Remover filme">
            <span>Remover</span>
          </button>
        </div>
      </li>
    `;
  }

  listaFilmesEl.innerHTML = htmlTotal;

  registrarEventosBotoesLista();
}

function realizarLogin() {
  let usuario = coletarUsuario();
  let senha = coletarSenha();
  let resultado = validarCredenciais(usuario, senha);

  if (resultado !== true) {
    exibirErroLogin(resultado);
    return;
  }

  limparErroLogin();
  exibirSecaoCrud(usuario.trim());
  renderizarLista();
}

function realizarLogout() {
  exibirSecaoLogin();
}

function adicionarFilmeAoFinal() {
  let nomeFilme = coletarNomeFilme();
  let resultado = validarNomeFilme(nomeFilme);

  if (resultado !== true) {
    exibirFeedback(resultado, "aviso");
    return;
  }

  listaDeFilmes.push(nomeFilme.trim());
  inputFilme.value = "";
  exibirFeedback(`"${nomeFilme.trim()}" adicionado ao final da lista.`, "sucesso");
  renderizarLista();
}

function adicionarFilmeAoInicio() {
  let nomeFilme = coletarNomeFilme();
  let resultado = validarNomeFilme(nomeFilme);

  if (resultado !== true) {
    exibirFeedback(resultado, "aviso");
    return;
  }

  listaDeFilmes.unshift(nomeFilme.trim());
  inputFilme.value = "";
  exibirFeedback(`"${nomeFilme.trim()}" adicionado ao início da lista.`, "sucesso");
  renderizarLista();
}

function editarFilme(indice) {
  let nomeAtual = listaDeFilmes[indice];
  let novoNome = prompt(`Editar filme na posição ${indice + 1}:\n\nNome atual: "${nomeAtual}"\n\nNovo nome:`, nomeAtual);

  if (novoNome === null) {
    exibirFeedback("Edição cancelada. O item original foi mantido.", "info");
    return;
  }

  let resultado = validarNomeFilme(novoNome);
  if (resultado !== true) {
    let manter = confirm("O nome digitado está vazio.\n\nDeseja manter o filme original?");
    if (manter) {
      exibirFeedback("Campo vazio — o item original foi mantido.", "info");
    }
    return;
  }

  let nomeAnterior = listaDeFilmes[indice];
  listaDeFilmes[indice] = novoNome.trim();

  exibirFeedback(`"${nomeAnterior}" foi atualizado para "${novoNome.trim()}".`, "sucesso");
  renderizarLista();
}

function removerFilme(indice) {
  let nomeFilme = listaDeFilmes[indice];
  let confirmado = confirm(`Tem certeza que deseja remover:\n\n"${nomeFilme}"?`);

  if (!confirmado) {
    exibirFeedback("Remoção cancelada.", "info");
    return;
  }

  listaDeFilmes.splice(indice, 1);
  exibirFeedback(`"${nomeFilme}" foi removido da lista.`, "sucesso");
  renderizarLista();
}

function registrarEventosBotoesLista() {
  let botoesEditar = document.querySelectorAll(".btn-editar");
  let botoesRemover = document.querySelectorAll(".btn-remover");

  for (let i = 0; i < botoesEditar.length; i++) {
    botoesEditar[i].addEventListener("click", function () {
      editarFilme(i);
    });
  }

  for (let j = 0; j < botoesRemover.length; j++) {
    botoesRemover[j].addEventListener("click", function () {
      removerFilme(j);
    });
  }
}


function inicializarAplicacao() {
  btnLogin.addEventListener("click", realizarLogin);

  inputUsuario.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      realizarLogin();
    }
  });

  inputSenha.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      realizarLogin();
    }
  });

  btnLogout.addEventListener("click", realizarLogout);
  btnAdicionarFim.addEventListener("click", adicionarFilmeAoFinal);
  btnAdicionarInicio.addEventListener("click", adicionarFilmeAoInicio);

  inputFilme.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      adicionarFilmeAoFinal();
    }
  });

  inputUsuario.addEventListener("input", limparErroLogin);
  inputSenha.addEventListener("input", limparErroLogin);
}

document.addEventListener("DOMContentLoaded", inicializarAplicacao);