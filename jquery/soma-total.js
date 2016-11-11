//versao Lucas cabecao
var removeItem = function(){
    event.preventDefault();

    var eu = $(this); //referencia ao próprio elemento que chama a função

    var itemTotal = eu.closest("tr").find(".item-total"); //acha o texto do valor total do item e salva em itemTotal
    var preco = parseFloat(itemTotal.text()); //transforma o texto do elemento em Float
    var valorTotal = parseFloat($("#valor-total").text()); //pega o valor, já em Float, do total de itens
    valorTotal -= preco; //desconta o valor total do item do valor de todos os itens
    eu.closest("tr").remove(); //remove o item

    var quantidade = parseInt($("#quantidade-itens").text()); //pega o valor, já em Float, fa quantidade total de itens
    var quantidadeAtualizada = quantidade - 1; //desconta o item removido do total
    $("#quantidade-itens").text(quantidadeAtualizada); //atualiza a quantidade de itens
    $("#valor-total").text(valorTotal); //atualiza o valor toral de itens
}

var aposInicializado = function(){
    var itens = $(".item-total"); //cria um vetor com todos os elementos que possuem a classe item-total
    var total = 0;

    //loop para somar o valor de todos os itens
    for (var i = 0; i < itens.length; i++){

        var item = $(itens[i]).text(); //pega o texto de cada elemento
        total += parseFloat(item); //transforma em Float o texto e soma no total
    }

    //salva o valor como texto
    $("#valor-total").text(total);
    $("#quantidade-itens").text(itens.length);

    //ao clicar no elemetno que possui a classe remove-item faz uma ação (chama a função)
    $(".remove-item").click(removeItem);
};

$(aposInicializado);

//versao mais clean, sem repetição de codigo
var atualizaDados = function(){
    var items = $(".item-total");
    var total = 0;
    for(var i=0; i < items.length; i++) {
        var conteudo = $(items[i]).text();
        var preco = parseFloat(conteudo);
        total += preco;
    }
    $("#valor-total").text(total);
    $("#quantidade-de-itens").text(items.length);
};

//a diferenca está em que, toda vez que se remove um item se faz o caluclo do total novamente atualizando os dados
// var removeItem = function(event) {
//     event.preventDefault();

//     var self = $(this);
//     self.closest("tr").remove();
//     atualizaDados();
// };

// var aposInicializado = function() {

//     $(".remove-item").click(removeItem);
//     atualizaDados();
// };

// $(aposInicializado);