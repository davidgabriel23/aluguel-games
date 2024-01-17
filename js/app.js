function alterarStatus(id){
    let gameclicado = document.getElementById(`game-${id}`);
    let img = gameclicado.querySelector('.dashboard__item__img'); 
    let botao = gameclicado.querySelector('.dashboard__item__button');
    let nomejogo = gameclicado.querySelector('.dashboard__item__name');


    if(botao.innerHTML === 'Alugar'){
        botao.innerHTML = 'Devolver'
        botao.style.backgroundColor = '#01080E'
        img.className = 'dashboard__item__img dashboard__item__img--rented'
        

    
    } else{
        botao.innerHTML = 'Alugar'
        botao.style.backgroundColor = '#1875E8'
        img.className = 'dashboard__item__img'
    }

}