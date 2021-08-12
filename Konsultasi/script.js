$(window).on('load',function(){
    $('.card').each(function(i){

        setTimeout(function(){
            $('.card').eq(i).addClass('muncul');
        }, 300 * (i+1))
    })

})