function carregar() {
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  if (hora >= 0 && hora < 12) {
    // Acesso diurno
    document.body.style.background = 'url(./img/nuvens-dia.png)';
  } else if (hora >= 12 && hora <= 18) {
    // Acesso vespertino
    document.body.style.background = 'url(./img/nuvens-tarde.png)';
  } else {
    // Acesso noturno
    document.body.style.background = 'url(./img/nuvens-noite.png)';
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

