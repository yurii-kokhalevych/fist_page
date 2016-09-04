$(function(){
    $("#mar3").click(function(){
        $(".mar3").show("slow");
        $(".footer").hide();
        $(".header").hide();
        $(".page-navigator").hide();
        $("#inl").hide();
        $("#ret1").hide();
        $("#ret2").hide();
        $("#ret").hide();
        $("#ret4").hide();
        $("#ret5").hide();
        $("#ret6").hide();
        $("#ret7").hide();
        $("#ret8").hide();
        $("#ret9").hide();
        $("#ret3").animate({
          top: 0,
          left: 0,
        });
        $("#ret3").show();
    });
    
    $("#ret3").click(function(){
    $(".header").show();
    $(".page-navigator").show();
    $(".footer").show();
    $("#inl").show();
    $("#poz").show();
    $("#mar3").animate({
        top:"230px",
        left:"270px"
    });
    $("#ret3").hide();
    $(".mar3").hide("slow");
    });
});