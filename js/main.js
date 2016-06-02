
  $(document).on('ready',function(){
  $(".foo-hamburger").on('click',function(){
    $(".navmobile-wrapper").toggle();
  });
  //scroll to with offset
  var buffer = 20;
  var offset = buffer + $('.nav-main').outerHeight(true);
  console.log(offset);


  $('body').css('margin-top', offset);
    $('.navdesktop-wrapper').outerHeight(true);


  $('.navmobile-wrapper a').on('click',function(event){

    console.log(event);

    event.preventDefault();

    var pageToScrollTo = $(this).attr('href');


    $(window).scrollTo(/*can put to content inside of section*/pageToScrollTo, 1000, {offset: -offset});

  });
  $('.navdesktop-wrapper a').on('click',function(event){

    console.log(event);

    event.preventDefault();

    var pageToScrollTo = $(this).attr('href');


    $(window).scrollTo(/*can put to content inside of section*/pageToScrollTo, 800, {offset: -offset});

//end scrollTo
});


//business card toggle show hide
  document.getElementById("busCard").onclick = function(){

  $("#popupcard").toggle();
}











});
