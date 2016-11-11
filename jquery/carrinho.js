
var atualizaDados = function(){
    var items = $(".item-total:visible");
    var total = 0;

    for(var i=0; i < items.length; i++) {
        var conteudo = $(items[i]).text();
        var preco = parseFloat(conteudo);
        total += preco;
    }
    $("#valor-total").text(total);
    $("#quantidade-itens").text(items.length);
};
//a diferenca está em que, toda vez que se remove um item se faz o caluclo do total novamente atualizando os dados
var removeItem = function() {
    event.preventDefault();

    var eu = $(this);
    eu.closest("tr").hide();//ao inves de remove-lo vamos esconde-lo para podermos acessa-lo depois (funcao undo)

    atualizaDados();
};

var undo = function(){
    $("tr:visible").removeClass("recuperado");

    var escondido = $("tr:hidden"); //seleciona todos os trs que possuem como display hide
    escondido.addClass("recuperado");
    escondido.show();
};


var aposInicializado = function() {

    $(".remove-item").click(removeItem);
    $("#undo").click(undo);
    atualizaDados();
};

$(aposInicializado);