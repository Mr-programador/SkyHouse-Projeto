function carregar() {
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();

    // Acesso diurno
  if (hora >= 6 && hora < 12) {
    document.body.style.background = '#fff';
    // Acesso vespertino
  } else if (hora >= 12 && hora < 18) {
    document.body.style.background = '#fff';
    // Acesso noturno
  } else if (hora >= 18 && hora < 2) {
    document.body.style.background = '#fff';
    // Acesso madrugada
  } else{
    document.body.style.background = '#fff';
  }
  document.body.style.backgroundSize = 'cover';
}

function iniciarRotacao(element) {
    element.classList.add('rotating');
    element.classList.remove('flipped');
}

function pararRotacao(element) {
    element.classList.remove('rotating');
}

function trocarImagem(element, novaImagem) {
    element.src = novaImagem;
}

function redirecionar(url) {
  window.location.href = url;
}

function iluminarTexto(element) {
    element.classList.add('iluminar');
}

