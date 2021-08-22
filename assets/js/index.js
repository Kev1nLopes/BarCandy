
    let btnEnviar = document.getElementById("btn");
    let nome = document.getElementById("nome");
    let contato = document.getElementById("numero")
    let total = document.getElementById("total");
    let quantidade = document.getElementById("quantidade");
    let produtos = document.getElementById("products");
    let produtosItem = document.querySelectorAll("#products option");
    
    produtos.addEventListener("change",function(){
        quantidade.value= 1;
        
    })
   
    btnEnviar.addEventListener("click", function(e){
        e.preventDefault();
        if(nome.value.length == 0 || numero.value.length == 0){
            alert("informe seu nome e seu numero por favor!");
            throw new Error("Precisamos do seu nome")
        }
        window.alert("Pedido Enviado " + nome.value);
    })
    
