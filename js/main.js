/*global $, document, WOW*/
$(document).ready(function(){
    
    new WOW().init();
    
    $('.owl-carousel-one').owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            100: {
              items: 1
            },
            700: {
              items: 2
            },
            1000: {
              items: 3
            }
          }
        });
    
    $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            100: {
              items: 1
            },
            700: {
              items: 2
            },
            1000: {
              items: 4
            }
          }
        });
    
    $(".stud-test .testmonial .testmonial-imgs .img-one").on("click", function () {
        
        var imageUrlOne =  "imgs/te-male.jpg";
        var imageUrlTwo =  "imgs/student.jpg";
        var imageUrlThree =  "imgs/te-female.jpg";
        
        if($(this).hasClass("m-img")) {
           
            $(".stud-test .testmonial .testmonial-imgs .img-one").css({"background": "url(" + imageUrlTwo + ")", "background-size":"cover"});
            $(".stud-test .testmonial .testmonial-imgs .main-img .img-two").css({"background": "url(" + imageUrlOne + ")", "background-size":"cover"});
            $(".stud-test .testmonial .testmonial-imgs .img-three").css({"background": "url(" + imageUrlThree + ")", "background-size":"cover"});
            $(this).removeClass("m-img");
            $(".stud-test .testmonial .testmonial-txt .qut-one").addClass("active");
            $(".stud-test .testmonial .testmonial-txt .qut-two").removeClass("active");
            $(".stud-test .testmonial .testmonial-txt .qut-three").removeClass("active");
            
           } else {
                $(this).addClass("m-img");
                $(".stud-test .testmonial .testmonial-imgs .img-one").css({"background-image": "url(" + imageUrlOne + ")", "background-size":"cover"});
                $(".stud-test .testmonial .testmonial-imgs .main-img .img-two").css({"background": "url(" + imageUrlTwo + ")", "background-size":"cover"});
                $(".stud-test .testmonial .testmonial-imgs .img-three").css({"background-image": "url(" + imageUrlThree + ")", "background-size":"cover"});
               
           }
        
        });
    $(".stud-test .testmonial .testmonial-imgs .img-two").on("click", function () {
        
        var imageUrlOne =  "imgs/te-male.jpg";
        var imageUrlTwo =  "imgs/student.jpg";
        var imageUrlThree =  "imgs/te-female.jpg";
        
        $(this).css({"background-image": "url(" + imageUrlTwo + ")", "background-size":"cover"});
        $(".stud-test .testmonial .testmonial-imgs .img-one").css({"background-image": "url(" + imageUrlOne + ")", "background-size":"cover"});
        $(".stud-test .testmonial .testmonial-imgs .main-img .img-two").css({"background-image": "url(" + imageUrlTwo + ")", "background-size":"cover"});
        $(".stud-test .testmonial .testmonial-imgs .img-three").css({"background-image": "url(" + imageUrlThree + ")", "background-size":"cover"});
        $(".stud-test .testmonial .testmonial-txt .qut-one").removeClass("active");
        $(".stud-test .testmonial .testmonial-txt .qut-two").addClass("active");
        $(".stud-test .testmonial .testmonial-txt .qut-three").removeClass("active");
        
        });
    $(".stud-test .testmonial .testmonial-imgs .img-three").on("click", function () {
        
        var imageUrlOne =  "imgs/te-male.jpg";
        var imageUrlTwo =  "imgs/student.jpg";
        var imageUrlThree =  "imgs/te-female.jpg";
        
        if($(this).hasClass("m-img")) {
           
            $(".stud-test .testmonial .testmonial-imgs .img-one").css({"background": "url(" + imageUrlOne + ")", "background-size":"cover"});
            $(".stud-test .testmonial .testmonial-imgs .main-img .img-two").css({"background": "url(" + imageUrlThree + ")", "background-size":"cover"});
            $(".stud-test .testmonial .testmonial-imgs .img-three").css({"background": "url(" + imageUrlTwo + ")", "background-size":"cover"});
            $(this).removeClass("m-img");
            $(".stud-test .testmonial .testmonial-txt .qut-one").removeClass("active");
            $(".stud-test .testmonial .testmonial-txt .qut-two").removeClass("active");
            $(".stud-test .testmonial .testmonial-txt .qut-three").addClass("active");
            
           } else {
                $(this).addClass("m-img");
                $(".stud-test .testmonial .testmonial-imgs .img-one").css({"background-image": "url(" + imageUrlOne + ")", "background-size":"cover"});
                $(".stud-test .testmonial .testmonial-imgs .main-img .img-two").css({"background": "url(" + imageUrlTwo + ")", "background-size":"cover"});
                $(".stud-test .testmonial .testmonial-imgs .img-three").css({"background-image": "url(" + imageUrlThree + ")", "background-size":"cover"});
               
           }
        
            
        
        });
    
    $("#popup").on("click", function() {
        
        $(".modal").css({"display": "block", "opacity":"1", "overflow":"auto", "background":"rgba(0,0,0, 0.6)"});
        $(".modal-dialog").css({"display": "block", "opacity":"1", "overflow":"auto"});
        $("html").css({"overflow":"hidden"});
        
    });
    $("#popup1").on("click", function() {
        
        $(".modal").css({"display": "block", "opacity":"1", "overflow":"auto", "background":"rgba(0,0,0, 0.6)"});
        $(".modal-dialog").css({"display": "block", "opacity":"1", "overflow":"auto"});
        $("html").css({"overflow":"hidden"});
        
    });
    $(".close").on("click", function() {
        $(".modal").fadeOut();
        $(".modal-dialog").fadeOut();
        $("html").css({"overflow":"auto"});
    });
    $(".modal").on("click", function() {
        $(".modal").css({"display": "none", "opacity":"0", "overflow":"auto"});
        $(".modal-dialog").css({"display": "none", "opacity":"0", "overflow":"auto"});
        $("html").css({"overflow":"auto"});
    });
    
    $("#menu").on("click", function() {
      $(".menu").css({"opacity": "1"});
      $(".menu").animate({"right":"0px"});
      $("html").css({"overflow":"hidden"});
      $(".menu-overlay").css({"display":"block"});
    });
    $(".menu .fa-times").on("click", function () {
        $(".menu").animate({"right":"-210px"});
        $(".menu").css({"opacity": "0"});
        $("html").css({"overflow":"auto"});
        $(".menu-overlay").css({"display":"block"});
    });
    $(".menu-overlay").on("click", function () {
        $(".menu").animate({"right":"-210px"});
        $(".menu").css({"opacity": "0"});
        $("html").css({"overflow":"auto"});
        $(".menu-overlay").css({"display":"none"});
    });
    
});

