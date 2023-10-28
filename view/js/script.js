let menu = document.querySelector('.menu-icon')
let navHeader = document.querySelector('.nav-header')
let visibilidade = false

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
    }else if(larguraAtual < larguraCelular){
        navHeader.style.display='none'
    }
}
window.addEventListener('resize', verificarLargura);
verificarLargura();