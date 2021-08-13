$(".kotak1").click(function(){
    $('.kotak1').addClass('click');
    $('.kotak2').removeClass('click');
    $('.kotak3').removeClass('click');
    $('.kotak4').removeClass('click');
    $('.rumah').addClass('aktif');
    $('.kantor').removeClass('aktif');
    $('.formulir').addClass('mundur');
});

$(".kotak2").click(function(){
    $('.kotak2').addClass('click');
    $('.kotak1').removeClass('click');
    $('.kotak3').removeClass('click');
    $('.kotak4').removeClass('click');
    $('.kantor').addClass('aktif');
    $('.rumah').removeClass('aktif');
    $('.formulir').addClass('mundur');
});

$(".kotak3").click(function(){
    $('.kotak3').addClass('click');
    $('.kotak1').removeClass('click');
    $('.kotak2').removeClass('click');
    $('.kotak4').removeClass('click');
    $('.formulir').addClass('mundur');
});

$(".kotak4").click(function(){
    $('.kotak4').addClass('click');
    $('.kotak1').removeClass('click');
    $('.kotak2').removeClass('click');
    $('.kotak3').removeClass('click');
    $('.formulir').addClass('mundur');
});


