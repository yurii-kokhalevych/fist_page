$(function(){
    $("#mar2").click(function(){
        $(".mar2").show("slow");
        $(".footer").hide();
        $(".header").hide();
        $(".page-navigator").hide();
        $("#inl").hide();
        $("#ret1").hide();
        $("#ret").hide();
        $("#ret3").hide();
        $("#ret4").hide();
        $("#ret5").hide();
        $("#ret6").hide();
        $("#ret7").hide();
        $("#ret8").hide();
        $("#ret9").hide();
        $("#ret2").animate({
          top: 0,
          left: 0,
        });
        $("#ret2").show();
    });
    
    $("#ret2").click(function(){
    $(".header").show();
    $(".page-navigator").show();
    $(".footer").show();
    $("#inl").show();
    $("#poz").show();
    $("#mar2").animate({
        top:"230px",
        left:"190px"
    });
    $("#ret2").hide();
    $(".mar2").hide("slow");
    });
});