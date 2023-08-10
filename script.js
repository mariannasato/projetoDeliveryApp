let i = 0;

function selecionarPrato(opcaoSelecionada){
    const botaoClicado = document.querySelector(".prato.selecionado")
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
        i = i - 1
    }

    opcaoSelecionada.classList.add("selecionado");

    i = i + 1
    console.log(i)

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

    i = i + 1
    console.log(i)

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

    i = i + 1
    console.log(i)

    if (i == 3){
        const finalizarPedido = document.querySelector("footer button");
        finalizarPedido.innerHTML = "Fechar Pedido"
        finalizarPedido.classList.add("botaoSelecionado")
    }
}

function confirmarPedido() {
    const telaConfirmar = document.querySelector(".confirmarPedido")
    telaConfirmar.classList.remove("hidden");
}
