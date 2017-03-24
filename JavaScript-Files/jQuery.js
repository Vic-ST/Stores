$(document).ready(function() {
    $(".rules").hide();
    $(".game").hide();
    $(".2playerfunc").hide();
    $(".3playerfunc").hide();
    $(".4playerfunc").hide();
    $(".ruleButton").click(function() {
        $(".homePage").fadeOut(1000);
        $(".rules").fadeIn(1000);
    });
    $(".back").click(function() {
        $(".rules").fadeOut(1000);
        $(".game").fadeOut(1000);
        $(".homePage").fadeIn(1000);
    });
    $(".back2").click(function() {
        $(".rules").fadeOut(1000);
        $(".2playerfunc").fadeOut(1000);
        $(".game").fadeIn(1000);
    });
    $(".back3").click(function() {
        $(".rules").fadeOut(1000);
        $(".3playerfunc").fadeOut(1000);
        $(".game").fadeIn(1000);
    });
    $(".back4").click(function() {
        $(".rules").fadeOut(1000);
        $(".4playerfunc").fadeOut(1000);
        $(".game").fadeIn(1000);
    });
    $(".gameButton").click(function() {
        $(".homePage").fadeOut(1000);
        $(".game").fadeIn(1000);
    });
    $(".hide").click(function() { 
        $(".hide, .back").fadeOut(1000);
    });
    $(".goTGame").click(function() {
        $(".rules").fadeOut(1000);
        $(".game").fadeIn(1000);
    });
    $(".2player").click(function() { 
        $(".game").fadeOut(1000);
        $(".2playerfunc").fadeIn(1000);
    });
    $(".3player").click(function() { 
        $(".game").fadeOut(1000);
        $(".3playerfunc").fadeIn(1000);
    });
    $(".4player").click(function() { 
        $(".game").fadeOut(1000);
        $(".4playerfunc").fadeIn(1000);
    });
});
