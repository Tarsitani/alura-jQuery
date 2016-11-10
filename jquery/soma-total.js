
var aposInicializado = function(){
    var itens = $(".item-total");
    var total = 0;


    for (var i = 0; i < itens.length; i++){

        var item = $(itens[i]).text();
        total += parseFloat(item);
    }

    $("#valor-total").text(total);
    $("#quantidade-itens").text(itens.length);
};

$(aposInicializado);