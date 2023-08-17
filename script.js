let optionsCounter = 0;

function selecionarPrato(opcaoSelecionada){
    const botaoClicado = document.querySelector(".prato.selecionado")
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
        optionsCounter = optionsCounter - 1
    }
    
    opcaoSelecionada.classList.add("selecionado");

    Array.from( checkGeral = document.getElementsByClassName("pratocheck")).forEach(Element => Element.classList.add("hidden"))
    const checkmark = document.querySelector(".prato.selecionado img").classList.remove("hidden")

    optionsCounter = optionsCounter + 1

    if (optionsCounter == 3){
        const finalizarPedido = document.querySelector("footer button");
        finalizarPedido.innerHTML = "Fechar Pedido"
        finalizarPedido.classList.add("botaoSelecionado")
    }
}

function selecionarBebida(opcaoSelecionada){
    const botaoClicado = document.querySelector(".bebida.selecionado")
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
        optionsCounter = optionsCounter - 1
    }

    opcaoSelecionada.classList.add("selecionado");

    Array.from( checkGeral = document.getElementsByClassName("bebidacheck")).forEach(Element => Element.classList.add("hidden"))
    const checkmark = document.querySelector(".bebida.selecionado img").classList.remove("hidden")

    optionsCounter = optionsCounter + 1

    if (optionsCounter == 3){
        const finalizarPedido = document.querySelector("footer button");
        finalizarPedido.innerHTML = "Fechar Pedido"
        finalizarPedido.classList.add("botaoSelecionado")
    }

    }

function selecionarSobremesa(opcaoSelecionada){
    const botaoClicado = document.querySelector(".sobremesa.selecionado")
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
        optionsCounter = optionsCounter - 1
    }

    opcaoSelecionada.classList.add("selecionado");

    Array.from( checkGeral = document.getElementsByClassName("sobremesacheck")).forEach(Element => Element.classList.add("hidden"))
    const checkmark = document.querySelector(".sobremesa.selecionado img").classList.remove("hidden")

    optionsCounter = optionsCounter + 1

    if (optionsCounter == 3){
        const finalizarPedido = document.querySelector("footer button");
        finalizarPedido.innerHTML = "Fechar Pedido"
        finalizarPedido.classList.add("botaoSelecionado")
    }
}


function confirmarPedido() {
    if (optionsCounter == 3) {
    const telaConfirmar = document.querySelector(".confirmarPedido")
    telaConfirmar.classList.remove("hidden");

    const pratoTitulo = document.querySelector(".prato.selecionado h1");
    const confirmarPrato = document.querySelector(".itemPedido h1").innerHTML = pratoTitulo.innerHTML;

    const pratoPreco = document.querySelector(".prato.selecionado h2");
    const confirmarPratoPreco = document.querySelector(".itemPedido p").innerHTML = pratoPreco.innerHTML;

    const bebidaTitulo = document.querySelector(".bebida.selecionado h1");
    const confirmarBebida = document.querySelector(".itemPedido.bebida h1").innerHTML = bebidaTitulo.innerHTML;

    const bebidaPreco = document.querySelector(".bebida.selecionado h2");
    const confirmarBebidaPreco = document.querySelector(".itemPedido.bebida p").innerHTML = bebidaPreco.innerHTML;

    const sobremesaTitulo = document.querySelector(".sobremesa.selecionado h1");
    const confirmarSobremesa = document.querySelector(".itemPedido.sobremesa h1").innerHTML = sobremesaTitulo.innerHTML;

    const sobremesaPreco = document.querySelector(".sobremesa.selecionado h2");
    const confirmarSobremesaPreco = document.querySelector(".itemPedido.sobremesa p").innerHTML = sobremesaPreco.innerHTML;

    const pedidoTotal = document.querySelector(".itemPedido.total p");
    valorTotal =  Number((parseInt(pratoPreco.innerHTML.replace(/\D/g, "")))+(parseInt(bebidaPreco.innerHTML.replace(/\D/g, "")))+(parseInt(sobremesaPreco.innerHTML.replace(/\D/g, ""))))
    pedidoTotal.innerHTML = "R$ "+ valorTotal.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");

    const fundoCinza = document.querySelector("body").classList.toggle("fundoCinza");
    }
}

function cancela() {
    const telaConfirmar = document.querySelector(".confirmarPedido")
    telaConfirmar.classList.add("hidden");
}