function alterarStatus(id){
    let gameclicado = document.getElementById(`game-${id}`);
    let img = gameclicado.querySelector('.dashboard__item__img'); 
    let botao = gameclicado.querySelector('.dashboard__item__button');
    let nomejogo = gameclicado.querySelector('.dashboard__item__name');



    if(img.classList.contains('dashboard__item__img--rented')){
        img.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar'
        botao.classList.remove('dashboard__item__button--return')

    }else{
        img.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
        botao.classList.add('dashboard__item__button--return')


    }




}



















//     if(botao.innerHTML === 'Alugar'){
//         botao.innerHTML = 'Devolver'
//         botao.style.backgroundColor = '#01080E'
//         img.className = 'dashboard__item__img dashboard__item__img--rented'
        

    
//     } else{
//         botao.innerHTML = 'Alugar'
//         botao.style.backgroundColor = '#1875E8'
//         img.className = 'dashboard__item__img'
//     }

// }