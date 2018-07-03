var vue_pessoa_detalhe = new Vue({
    el: '#div_pessoas .item_detalhe',
    data: {
        elemento: ''
    }
});

function click_pessoas(){
    $("#div_pessoas").removeClass("oculta");
    $("#li_pessoas").addClass("selecionada");

    $.ajax("https://swapi.co/api/people/", {
        success: function(data) {
            aspessoas=[];
            for(var i = 0; i<data.results.length; i++){
                var pessoa = data.results[i];
                aspessoas.push(pessoa);
            }

            var vue_div_planetas = new Vue({
                el: '#div_pessoas .lista_itens',
                data: {
                    arrey: aspessoas
                }
            });

            $("#div_pessoas li").on( "click", function (e) {
                $(".item_detalhe").show();
                console.log(e.currentTarget.textContent.trim());
                var nome_pessoa = e.currentTarget.textContent.trim();

                var item_selecionado = aspessoas.filter(function(item) { return item.name === nome_pessoa; })[0];
                vue_pessoa_detalhe.elemento= item_selecionado;
            });

        },
        error: function() {
            console.log("deu erro");
        }
    });
}

var vue_planeta_detalhe = new Vue({
    el: '#div_planetas .item_detalhe',
    data: {
        elemento: ''
    }
});
function click_planetas() {
    $("#div_planetas").removeClass("oculta");
    $("#li_planetas").addClass("selecionada");

    $.ajax("https://swapi.co/api/planets/", {
        success: function(data) {
            osplanetas=[];
            for(var i = 0; i<data.results.length; i++){
                var pla = data.results[i];
               osplanetas.push(pla);
            }

            var vue_div_planetas = new Vue({
                el: '#div_planetas .lista_itens',
                data: {
                    arrey: osplanetas
                }
            });

            $("#div_planetas li").on( "click", function (e) {
                $(".item_detalhe").show();
                console.log(e.currentTarget.textContent.trim());
                var nome_planeta = e.currentTarget.textContent.trim();

                var meupla = osplanetas.filter(function(item) { return item.name === nome_planeta; })[0];
                vue_planeta_detalhe.elemento= meupla;
            });

        },
        error: function() {
            console.log("deu erro");
        }
    });
}

var vue_especie_detalhe = new Vue({
    el: '#div_especies .item_detalhe',
    data: {
        elemento: ''
    }
});
function click_especies(){
    $("#div_especies").removeClass("oculta");
    $("#li_especies").addClass("selecionada");

    $.ajax("https://swapi.co/api/species/", {
        success: function(data) {
            asespecies=[];
            for(var i = 0; i<data.results.length; i++){
                var esp = data.results[i];
                asespecies.push(esp);
            }

            var vue_div_especies = new Vue({
                el: '#div_especies .lista_itens',
                data: {
                    arrey: asespecies
                }
            });

            $("#div_especies li").on( "click", function (e) {
                $(".item_detalhe").show();
                console.log(e.currentTarget.textContent.trim());
                var nome_especie = e.currentTarget.textContent.trim();

                var minha_esp = asespecies.filter(function(item) { return item.name === nome_especie; })[0];
                vue_especie_detalhe.elemento= minha_esp;
            });

        },
        error: function() {
            console.log("deu erro");
        }
    });

}

var vue_nave_detalhe = new Vue({
    el: '#div_naves .item_detalhe',
    data: {
        elemento: ''
    }

});

function click_naves() {
    $("#div_naves").removeClass("oculta");
    $("#li_naves").addClass("selecionada");

    $.ajax("https://swapi.co/api/starships/", {
        success: function(data) {
            asnaves=[];
            for(var i = 0; i<data.results.length; i++){
                var nav = data.results[i];
                asnaves.push(nav);
            }

            var vue_div_naves = new Vue({
                el: '#div_naves .lista_itens',
                data: {
                    arrey: asnaves
                }
            });

            $("#div_naves li").on( "click", function (e) {
                $(".item_detalhe").show();
                console.log(e.currentTarget.textContent.trim());
                var nome_nave = e.currentTarget.textContent.trim();

                var minha_nave = asnaves.filter(function(item) { return item.name === nome_nave; })[0];
                vue_nave_detalhe.elemento= minha_nave;
            });

        },
        error: function() {
            console.log("deu erro");
        }
    });
}

var vue_filme_detalhe = new Vue({
    el: '#div_filmes .item_detalhe',
    data: {
        elemento: ''
    }

});

function click_filmes() {
    $("#div_filmes").removeClass("oculta");
    $("#li_filmes").addClass("selecionada");

    $.ajax("https://swapi.co/api/films/", {
        success: function(data) {
            osfilmes=[];
            for(var i = 0; i<data.results.length; i++){
                var film = data.results[i];
                osfilmes.push(film);
            }

            var vue_div_filmes = new Vue({
                el: '#div_filmes .lista_itens',
                data: {
                    arrey: osfilmes
                }
            });

            $("#div_filmes li").on( "click", function (e) {
                $(".item_detalhe").show();
                console.log(e.currentTarget.textContent.trim());
                var nome_filme = e.currentTarget.textContent.trim();

                var meu_filme = osfilmes.filter(function(item) { return item.title === nome_filme; })[0];
                vue_filme_detalhe.elemento=meu_filme;
            });

        },
        error: function() {
            console.log("deu erro");
        }
    });
}

var vue_veiculo_detalhe = new Vue({
    el: '#div_veiculos .item_detalhe',
    data: {
        elemento: ''
    }

});

function click_veiculos() {
    $("#div_veiculos").removeClass("oculta");
    $("#li_veiculos").addClass("selecionada");

    $.ajax("https://swapi.co/api/vehicles/", {
        success: function(data) {
            osveiculos=[];
            for(var i = 0; i<data.results.length; i++){
                var vei = data.results[i];
                osveiculos.push(vei);
            }

            var vue_div_veiculos = new Vue({
                el: '#div_veiculos .lista_itens',
                data: {
                    arrey: osveiculos
                }
            });

            $("#div_veiculos li").on( "click", function (e) {
                $(".item_detalhe").show();
                console.log(e.currentTarget.textContent.trim());
                var nome_veiculo = e.currentTarget.textContent.trim();

                var meu_veiculo = osveiculos.filter(function(item) { return item.name === nome_veiculo; })[0];
                vue_veiculo_detalhe.elemento= meu_veiculo;
            });

        },
        error: function() {
            console.log("deu erro");
        }
    });
}

function click_home() {
    $("#div_home").removeClass("oculta");
}


function limpar_tela() {
    $("#div_home").addClass("oculta");
    $("#div_pessoas").addClass("oculta");
    $("#div_planetas").addClass("oculta");
    $("#div_especies").addClass("oculta");
    $("#div_naves").addClass("oculta");
    $("#div_filmes").addClass("oculta");
    $("#div_veiculos").addClass("oculta");
    $("#menu li").removeClass("selecionada");
    $("#div_resultadobusca").addClass("oculta");
    $(".item_detalhe").hide();

}

$( window ).on( 'hashchange', function( e ) {
    console.log( window.location.hash );

    limpar_tela();

    if (window.location.hash.indexOf("pessoas") >= 0)
        click_pessoas();

    if (window.location.hash.indexOf("planetas") >= 0)
        click_planetas();

    if (window.location.hash.indexOf("especies") >= 0)
        click_especies();

    if (window.location.hash.indexOf("naves") >= 0)
        click_naves();

    if (window.location.hash.indexOf("filmes") >= 0)
        click_filmes();

    if (window.location.hash.indexOf("veiculos") >= 0)
        click_veiculos();

    if (window.location.hash.indexOf("home") >= 0)
       click_home();

});

var vue_div_resultadoplaneta = new Vue({
    el: '#resultado_planets',
    data: {
        meus_elementos: []
    }
});

var vue_div_resultadopessoa = new Vue({
    el: '#resultado_people',
    data: {
        meus_elementos: []
    }
});

var vue_div_resultadoespecie = new Vue({
    el: '#resultado_species',
    data: {
        meus_elementos: []
    }
});

var vue_div_resultadonave = new Vue({
    el: '#resultado_starships',
    data: {
        meus_elementos: []
    }
});

var vue_div_resultadofilme = new Vue({
    el: '#resultado_films',
    data: {
        meus_elementos: []
    }
});

var vue_div_resultadoveiculo = new Vue({
    el: '#resultado_vehicles',
    data: {
        meus_elementos: []
    }
});


$("#fazerbusca").click(function(e){
    var busca= $("#busca").val();
    var categoria= $("#categoria").val();

    limpar_tela();

    $(".resultado").hide();

    $("#div_resultadobusca").removeClass("oculta");

    $.ajax("https://swapi.co/api/"+categoria+"/?search="+busca, {
        success: function(data) {
            var meu_resultado = data.results;

            if(!meu_resultado.length)
                return;

            $("#resultado_"+categoria).show();

            if(categoria == "planets")
                vue_div_resultadoplaneta.meus_elementos = meu_resultado;

            if(categoria == "people")
                vue_div_resultadopessoa.meus_elementos = meu_resultado;

            if(categoria == "species")
                vue_div_resultadoespecie.meus_elementos = meu_resultado;

            if(categoria == "starships")
                vue_div_resultadonave.meus_elementos = meu_resultado;

            if(categoria == "films")
                vue_div_resultadofilme.meus_elementos = meu_resultado;

            if(categoria == "vehicles")
                vue_div_resultadoveiculo.meus_elementos = meu_resultado;


        },
        error: function() {
            console.log("deu erro");
        }
    });
});