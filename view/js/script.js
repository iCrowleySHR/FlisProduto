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