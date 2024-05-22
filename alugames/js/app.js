function alterarStatus(id) { //identificou os botoes-funcoes e linkou cada botao a uma variavel
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    //if e else para alteracao do status do texto e cor do botao a clicar em alugar-devolver
    if(imagem.classList.contains('dashboard__item__img--rented')){ 
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}
