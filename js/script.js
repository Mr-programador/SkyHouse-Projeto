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

function redirecionarComAtraso(url, atraso) {
  setTimeout(function() {
    window.location.href = url;
  }, atraso);
}

function negritoTexto(element) {
  element.style.fontWeight = 'bold';
}

function removerNegritoTexto(element) {
  element.style.fontWeight = 'normal';
}

function girarMaisRapido(element, url) {
  iniciarRotacao(element);
  element.style.animationDuration = '0.5s';

  setTimeout(function() {
    pararRotacao(element);
    redirecionar(url);
  }, 2000);
}

function redirecionar(url) {
  window.location.href = url;
}

let buttonToggle = document.querySelector('.modo-escuro');
let body = document.body;
let classStyle = 'modo-escuro';

buttonToggle.addEventListener('click', function(){
  body.classList.toggle(classStyle);
});

/*Forma Maior 
buttonToggle.addEventListener('click', function(){
  body.classList.contains('modo-escuro')
  ? body.classList.remove('modo-escuro')
  : body.classList.add('modo-escuro')
}); */