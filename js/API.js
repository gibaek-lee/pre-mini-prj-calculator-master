$(document).ready(function() {

    $('#delete').on("click", function(){
        
        var num = $('#input').html();

        $('#input').html(num.slice(0,-1));
    });

});

