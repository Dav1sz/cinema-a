
var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

//Expandir o menu//

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir')
})



const pre_carregamento = document.querySelector("div.pre-carregamento");

function preCarregamento(){
    pre_carregamento.style.opacity = "0";

setTimeout(() => {
    pre_carregamento.style.display = "none";
}, 500);
}
