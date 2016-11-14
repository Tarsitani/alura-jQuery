var propaganda = function(){

    var propagandas = ["Que tal comprar mais coisas? Sim, sou uma propaganda hu3",
                        "Seria uma pena se nao tivesse propaganda... Tcharam",
                        "Olha a propaganda aqui de novo ^.^",
                        "Alo... alo... propaganda?? Aqui estamos!!! :D"];
    var posicao = Math.floor(propagandas.length * Math.random()); //seleciona um numero aleatório de posicao até o tamanho maximo do array e arredona para baixo com Math.floor
    var texto = propagandas[posicao]; //salva o texto aleatorio a nessa variavel
    var tr = $("<tr>").addClass("propaganda").append($("<td>")); //cria um tr com a classe propaganda e uma tag td
    tr.find("td").attr("colspan", 6); //procura a tag td dentro do tr e atribui o atributo colspan + seu valor
    tr.find("td").text(texto);//na variavel tr procura o a tag td e adiciona como texto a variavel texto dava pra fazer na linha de cima... :D
    return tr;//retorna a tr criada com todos os seus elementos

    //um outro jeito seria criar tudo de uma vez concateando, mas ai depende do caso pra utilizar esse metodo
    //var propaganda = propagandas[Math.floor(propagandas.length * Math.random())];
    //var tr = $("<tr class='propaganda'><td colspan='6'>" + proapganda + "</td></tr>"); //tryhardando
    //return tr;

};

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
    //para cada elemento que possui a classe carrinho
    $(".carrinho").each(function(){
        //procura a cada 'enesimo' elemento filho, nesse caso terceiro(nth-child(3n)) e para cada chama uma funcao. Separado por virgula colocamos mais um caso, sempre no ultimo elemento chama a fucntion tb
        $(this).find("tr:nth-child(3n), tr:last").each(function(){
            propaganda().insertAfter($(this));//vai inserir a propaganda depois do atual elemento (tb existe insertBefore)

        });

    });

};

$(aposInicializado);