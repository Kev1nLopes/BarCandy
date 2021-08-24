
    let btnEnviar = document.getElementById("btn");
    let nome = document.getElementById("nome");
    let contato = document.getElementById("numero")
    let total = document.getElementById("total");
    let valor = document.getElementById("valor");
    let quantidade = document.getElementById("quantidade");
    let produtos = document.getElementById("products");
    let produtosItem = document.querySelectorAll("#products option");
    

    valor.value = "R$ 5,00";
    quantidade.value = 1;

    produtos.addEventListener("change",function(){
        quantidade.value= 1;
        switch(produtos.value){
            case "0001":
                valor.value = "R$ 5,00"
                break;
            case "0002":
                valor.value = "R$ 6,00";
                break;
            case "0003":
                valor.value = "R$ 6,50";
                break;
            case "0004":
                valor.value = "R$ 3,50";
                break;
            case "0005":
                valor.value = "R$ 4,50";
                break;
            case "0006":
                valor.value = "R$ 4,00";
                break;
        }
        
    });
    quantidade.addEventListener("change", function(){
        total.value = "R$ " + parseFloat(parseFloat(quantidade.value) * parseFloat(valor.value.replace(",",".").slice(-5))).toFixed(2);
        
    })
    btnEnviar.addEventListener("click", function(e){
        e.preventDefault();
        if(quantidade.value < 1){
            alert("Você precisa informar a quantidade");
        }
        if(nome.value.length == 0 || numero.value.length == 0){
            alert("informe seu nome e seu numero por favor!");
            throw new Error("Precisamos do seu nome");
        }
        window.alert("Pedido Enviado " + nome.value);
    });