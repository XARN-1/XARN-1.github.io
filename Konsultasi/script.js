$(window).on('load',function(){
    $('.card').each(function(i){

        setTimeout(function(){
            $('.card').eq(i).addClass('muncul');
        }, 200 * (i+1))
    })

})