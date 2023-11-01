let menu = document.querySelector('.menu-icon')
let navHeader = document.querySelector('.nav-header')
let visibilidade = false
let inicioNav = document.querySelector('.inicio')


menu.addEventListener('click', ()=>{
    if(visibilidade == false){
        visibilidade = true
        navHeader.style.display='flex'
    }
    else{
        visibilidade = false
        navHeader.style.display='none'
    }
})

function verificarLargura(){
    let larguraAtual = window.innerWidth
    let larguraCelular = 1025
    if(larguraAtual > larguraCelular){
        navHeader.style.display='flex'
        inicioNav.setAttribute('class', 'inicio')
    }else if(larguraAtual < larguraCelular){
        navHeader.style.display='none'
        inicioNav.setAttribute('class', '')
    }
}
window.addEventListener('resize', verificarLargura);
verificarLargura();

/* video */
let main = document.querySelector('main')
let videoClick = document.querySelector('.img-video')
let linkURL = document.querySelector('.boxProduto')
let iframe = document.querySelector('iframe')


document.addEventListener('DOMContentLoaded', function () {
    let main = document.querySelector('main');
    let iframes = document.querySelectorAll('iframe');
    let btnSair = document.querySelector('.btn-sair')

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('img-video')) {
            main.style.opacity = '0.2';
            iframes[0].style.display = 'flex'; // Ajuste conforme necessário se houver vários iframes
            btnSair.style.display='flex'
            let iframeLink = event.target.closest('.boxProduto').getAttribute('data-src');
            iframes[0].setAttribute('src', iframeLink); // Ajuste conforme necessário se houver vários iframes

            function Sair(){
                btnSair.style.display='none'
                main.style.opacity = '1';
                iframes[0].style.display = 'none';
                iframes[0].setAttribute('src', '');
            }

            btnSair.addEventListener('click',Sair)
        }
    });
});