function adcionarNoFinal(lista, elemento) {

    let nova_lista = [];

    for (let i = 0; i < lista.length; i++) {
        nova_lista[i] = lista[i];

    }
    nova_lista[lista.length - 1] = elemento
    console.log(`Lista: ${lista}`);
    return nova_lista;
}

function removerDoFinal(lista, elemento) {

    let nova_lista = [];

    for (let i = 0; i < lista.length - 1; i++) {
        nova_lista[i] = lista[i];

    }
    console.log(`Lista: ${lista}`);
    return nova_lista;
}

function removerDoInicio(lista, elemento) {

    let nova_lista = [];

    for (let i = 1; i < lista.length; i++) {
        nova_lista[i] = lista[i - 1];

    }
    console.log(`Lista: ${lista}`);
    return nova_lista;
}

function adicionarNoInicio(lista, elemento) {

    let nova_lista = [];

    for (let i = 1; i < lista.length; i++) {
        nova_lista[0] = elemento
        nova_lista[i] = lista[i];

    }
    console.log(`Lista: ${lista}`);
    return nova_lista;
}

function alterarLista(lista, indice, quantidade, novoElemento) {
    if(indice > lista.length){
        return 0
    }if(quantidade == 0){
        for(let i = 0; i < lista.length; i++){
            nova_lista[i] = lista[i]
        }
        adcionarNoFinal(nova_lista, novoElemento)
        console.log("oiiiiiiiiii");
        console.log(`Lista: ${nova_lista}`);
        return nova_lista;
    }
    for(let i = indice; i < quantidade; i++){
        lista[i] = null
    }if(novoElemento != null){
       for(let i = indice; i < quantidade; i++){
        lista[i] = novoElemento
       } 
    }else{
        console.log("oiiiiiiiiii");
        
        return nova_lista
    }
}