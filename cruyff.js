$(function(){
    $("#mar4").click(function(){
        $(".mar4").show("slow");
        $(".footer").hide();
        $(".header").hide();
        $(".page-navigator").hide();
        $("#inl").hide();
        $("#ret1").hide();
        $("#ret2").hide();
        $("#ret3").hide();
        $("#ret").hide();
        $("#ret5").hide();
        $("#ret6").hide();
        $("#ret7").hide();
        $("#ret8").hide();
        $("#ret9").hide();
        $("#ret4").animate({
          top: 0,
          left: 0,
        });
        $("#ret4").show();
    });
    
    $("#ret4").click(function(){
    $(".header").show();
    $(".page-navigator").show();
    $(".footer").show();
    $("#inl").show();
    $("#poz").show();
    $("#mar4").animate({
        top:"230px",left:"390px"});
    $("#ret4").hide();
    $(".mar4").hide("slow");
    });
});