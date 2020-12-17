$(document).ready(function(){

    var source   = $("#card-hb-template").html();
    var template = Handlebars.compile(source);

    $.ajax({

        url: '../database/dischi_json.php',
        method: 'GET',
        success:function(data){
            console.log(data);

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

    $( "#select" ).change(function() {

        var selected_genre = $( "#select option:selected" ).text();
        // alert(selected_genre);

        $('.cards-container').empty();

        $.ajax({

            url: '../database/dischi_json.php',
            method: 'GET',
            success:function(data){
                console.log(data);

                for (var i = 0; i < data.length; i++) {


                    if (data[i].genre == selected_genre || selected_genre == 'All') {
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

                }

            },
            error:function(){
                console.log('error');
            },

        });

    });

});
