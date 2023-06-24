function carregar() {
    var data = new Date()
    //var hora = 20 //Lugar de TESTE da hora
    var hora = data.getHours()
    var min = data.getMinutes()
    if (hora >= 0 && hora < 12) {
        //Acesso diurno
        document.body.style.background = 'url(./img/ceu.jpg)';
    } else if (hora >= 12 && hora <= 18) {
        //Acesso vespertino
        document.body.style.background = 'url(./img/ceu.jpg)';
    } else {
        //Acesso noturno
        document.body.style.background = 'url(./img/ceu.jpg)';
    }
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