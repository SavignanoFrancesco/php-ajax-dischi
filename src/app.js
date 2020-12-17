$(document).ready(function(){

    var source   = $("#card-hb-template").html();
    var template = Handlebars.compile(source);

    $.ajax({

        url: '../database/dischi_json.php',
        method: 'GET',
        success:function(data){
            console.log(data);

            //scorro la strttura dati
            for (var i = 0; i < data.length; i++) {

                var context = {
                    poster: data[i].poster,
                    title: data[i].title,
                    author: data[i].author,
                    genre: data[i].genre,
                    year: data[i].year
                };

                //creo e aapendo la carta
                var card = template(context);

                $('.cards-container').append(card);

            }

        },
        error:function(){
            console.log('error');
        },

    });

    //ONCHANGE FILTER
    $( "#select" ).change(function() {

        //PRENDO IL TEXT DALLA SELECT
        var selected_genre = $( "#select option:selected" ).text();
        // alert(selected_genre);

        //SVUOTO IL CONTENITORE DELLE CARTE
        $('.cards-container').empty();

        //CHIAMATA AJAX
        $.ajax({

            url: '../database/dischi_json.php',
            method: 'GET',
            data: {
                'test': selected_genre
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

                    var card = template(context);

                    $('.cards-container').append(card);


                }

            },
            error:function(){
                console.log('error');
            },

        });

    });

});
