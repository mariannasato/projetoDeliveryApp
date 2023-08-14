let i = 0;

function selecionarPrato(opcaoSelecionada){
    const botaoClicado = document.querySelector(".prato.selecionado")
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
        i = i - 1
    }
    

    opcaoSelecionada.classList.add("selecionado");

    const checkGeral = document.querySelector(".prato img.check")
    checkGeral.classList.add("hidden")
    const checkmark = document.querySelector(".prato.selecionado img.check")
    checkmark.classList.remove("hidden")

    i = i + 1

    if (i == 3){
        const finalizarPedido = document.querySelector("footer button");
        finalizarPedido.innerHTML = "Fechar Pedido"
        finalizarPedido.classList.add("botaoSelecionado")
    }
}

function selecionarBebida(opcaoSelecionada){
    const botaoClicado = document.querySelector(".bebida.selecionado")
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
        i = i - 1
    }

    opcaoSelecionada.classList.add("selecionado");

    const checkGeral = document.querySelector(".bebida img.check")
    checkGeral.classList.add("hidden")
    const checkmark = document.querySelector(".bebida.selecionado img.check")
    checkmark.classList.remove("hidden")

    i = i + 1

    if (i == 3){
        const finalizarPedido = document.querySelector("footer button");
        finalizarPedido.innerHTML = "Fechar Pedido"
        finalizarPedido.classList.add("botaoSelecionado")
    }

    }



function selecionarSobremesa(opcaoSelecionada){
    const botaoClicado = document.querySelector(".sobremesa.selecionado")
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
        i = i - 1
    }

    opcaoSelecionada.classList.add("selecionado");

    const checkGeral = document.querySelector(".sobremesa img.check")
    checkGeral.classList.add("hidden")
    const checkmark = document.querySelector(".sobremesa.selecionado img.check")
    checkmark.classList.remove("hidden")

    i = i + 1

    if (i == 3){
        const finalizarPedido = document.querySelector("footer button");
        finalizarPedido.innerHTML = "Fechar Pedido"
        finalizarPedido.classList.add("botaoSelecionado")
    }
}


function confirmarPedido() {
    if (i == 3) {
    const telaConfirmar = document.querySelector(".confirmarPedido")
    telaConfirmar.classList.remove("hidden");

    const pratoTitulo = document.querySelector(".prato.selecionado h1");
    const confirmarPrato = document.querySelector(".itemPedido h1")
    confirmarPrato.innerHTML = pratoTitulo.innerHTML;

    const pratoPreco = document.querySelector(".prato.selecionado h2");
    const confirmarPratoPreco = document.querySelector(".itemPedido p")
    confirmarPratoPreco.innerHTML = pratoPreco.innerHTML;

    const bebidaTitulo = document.querySelector(".bebida.selecionado h1");
    const confirmarBebida = document.querySelector(".itemPedido.bebida h1");
    confirmarBebida.innerHTML = bebidaTitulo.innerHTML;

    const bebidaPreco = document.querySelector(".bebida.selecionado h2");
    const confirmarBebidaPreco = document.querySelector(".itemPedido.bebida p")
    confirmarBebidaPreco.innerHTML = bebidaPreco.innerHTML;

    const sobremesaTitulo = document.querySelector(".sobremesa.selecionado h1");
    const confirmarSobremesa = document.querySelector(".itemPedido.sobremesa h1");
    confirmarSobremesa.innerHTML = sobremesaTitulo.innerHTML;

    const sobremesaPreco = document.querySelector(".sobremesa.selecionado h2");
    const confirmarSobremesaPreco = document.querySelector(".itemPedido.sobremesa p")
    confirmarSobremesaPreco.innerHTML = sobremesaPreco.innerHTML;

    const pedidoTotal = document.querySelector(".itemPedido.total p");
    valorTotal =  Number((parseInt(pratoPreco.innerHTML.replace(/\D/g, "")))+(parseInt(bebidaPreco.innerHTML.replace(/\D/g, "")))+(parseInt(sobremesaPreco.innerHTML.replace(/\D/g, ""))))
    pedidoTotal.innerHTML = "R$ "+ valorTotal

    // const fundoCinza = document.querySelector("body").classList.toggle("fundoCinza");
    }
}

function cancela() {
    const telaConfirmar = document.querySelector(".confirmarPedido")
    telaConfirmar.classList.add("hidden");
}