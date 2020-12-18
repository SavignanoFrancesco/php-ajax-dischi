$(document).ready(function(){

    var card_source   = $("#card-hb-template").html();
    var card_template = Handlebars.compile(card_source);

    var option_source   = $("#option-hb-template").html();
    var option_template = Handlebars.compile(option_source);

    $.ajax({

        url: '../database/dischi_json.php',
        method: 'GET',
        success:function(data){
            console.log(data);

            //array che conterrà i generi
            var genres_array = [];

            //scorro la strttura dati
            for (var i = 0; i < data.length; i++) {

                var card_context = {
                    poster: data[i].poster,
                    title: data[i].title,
                    author: data[i].author,
                    genre: data[i].genre,
                    year: data[i].year
                };

                //creo e appendo la carta
                var card = card_template(card_context);
                $('.cards-container').append(card);

                //prelevo il genere del disco corrente
                var current_genre = data[i].genre;

                //pusho i generi senza ripetizioni
                if(!genres_array.includes(current_genre)) {
                    genres_array.push(current_genre);
                }

                console.log();

            }

            //ciclo l'array dei generi
            for (var i = 0; i < genres_array.length; i++) {

                var option_context = {
                    value: genres_array[i]
                };

                //creo e appendo la carta
                var option = option_template(option_context);
                $('#select').append(option);

            }

        },
        error:function(){
            console.log('error');
        },

    });

    //ONCHANGE FILTER
    $( "#select" ).change(function() {

        //PRENDO IL TEXT DALLA SELECT
        var selected_genre = $( "#select option:selected" ).val();
        // alert(selected_genre);

        //SVUOTO IL CONTENITORE DELLE CARTE
        $('.cards-container').empty();

        //CHIAMATA AJAX
        $.ajax({

            url: '../database/dischi_json.php',
            method: 'GET',
            data: {
                'selected_genre': selected_genre
            },
            success:function(data){
                console.log('dischi filtrati: ',data);

                for (var i = 0; i < data.length; i++) {

                    var context = {
                        poster: data[i].poster,
                        title: data[i].title,
                        author: data[i].author,
                        genre: data[i].genre,
                        year: data[i].year
                    };

                    var card = card_template(context);

                    $('.cards-container').append(card);

                }

            },
            error:function(){
                console.log('error');
            },

        });

    });

});
