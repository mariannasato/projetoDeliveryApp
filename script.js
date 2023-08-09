function selecionado(){
    const option = document.querySelector(".opcao");
    option.classList.toggle('selecionado');
    
    const check = document.querySelector(".check");
    check.classList.toggle('hidden');
}