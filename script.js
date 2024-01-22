//iniciando contagem
let contagem = 0;

//selecionar valor e botões
const value = document.querySelector('#value')
const btns = document.querySelectorAll(".botao")

btns.forEach(function (botao) {
    botao.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('diminuir')){
            contagem--;
        }else if(styles.contains('aumentar')){
            contagem++;
        }else{
            contagem = 0;
        }if(contagem > 0){
            value.style.color = 'green'
        }else if(contagem < 0){
            value.style.color = 'red'
        }else{
            value.style.color = 'black'
        }
        value.textContent = contagem;
    })
});