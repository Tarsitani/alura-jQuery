
var atualizaDados = function(){
    var carrinhos = $(".carrinho");//seleciona todos os elementos com a classe carrinho

    //para cada elemento, atualizar os dados
    carrinhos.each(function(){
        var carrinho = $(this);
        var items = carrinho.find(".item-total:visible");//procurar dentro dos elementos de carrinho os elemetnos com a classe item-total setadas como visible
        var total = 0;

        for(var i=0; i < items.length; i++) {
            var conteudo = $(items[i]).text();
            var preco = parseFloat(conteudo);
            total += preco;
        }
        carrinho.find(".valor-total").text(total);
        carrinho.find(".quantidade-itens").text(items.length);
    });
};


//a diferenca está em que, toda vez que se remove um item se faz o caluclo do total novamente atualizando os dados
var removeItem = function() {
    event.preventDefault();

    var eu = $(this);
    eu.closest("tr").hide();//ao inves de remove-lo vamos esconde-lo para podermos acessa-lo depois (funcao undo)

    atualizaDados();
};

var undo = function(){
    var carrinho = $(this).closest(".carrinho");
    carrinho.find("tr:visible").removeClass("recuperado");

    var escondido = carrinho.find("tr:hidden"); //seleciona todos os trs que possuem como display hide
    escondido.addClass("recuperado");
    escondido.show();

    atualizaDados();
};


var aposInicializado = function() {

    $(".remove-item").click(removeItem);
    $(".undo").click(undo);
    atualizaDados();
};

$(aposInicializado);