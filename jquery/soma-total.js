
var removeItem = function(){
    event.preventDefault();

    var eu = $(this);

    var itemTotal = eu.closest("tr").find(".item-total");
    var preco = parseFloat(itemTotal.text());
    var precoFinal -=
    eu.closest("tr").remove();

    var quantidade = parseInt($("#quantidade-itens").text());
    var quantidadeAtualizada = quantidade - 1;
    $("#quantidade-itens").text(quantidadeAtualizada);
}

var aposInicializado = function(){
    var itens = $(".item-total");
    var total = 0;


    for (var i = 0; i < itens.length; i++){

        var item = $(itens[i]).text();
        total += parseFloat(item);
    }

    $("#valor-total").text(total);
    $("#quantidade-itens").text(itens.length);
    $(".remove-item").click(removeItem);
};

$(aposInicializado);