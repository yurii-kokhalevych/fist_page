$(function(){
    $("#mar").click(function(){
        $(".mar").show("slow");
        $(".footer").hide();
        $(".header").hide();
        $(".page-navigator").hide();
        $("#inl").hide();
        $("#ret1").hide();
        $("#ret2").hide();
        $("#ret3").hide();
        $("#ret4").hide();
        $("#ret5").hide();
        $("#ret6").hide();
        $("#ret7").hide();
        $("#ret8").hide();
        $("#ret9").hide();
        $("#ret").animate({
          top: 0,
          left: 0,
        });
        $("#ret").show();
    });
    
    $("#ret").click(function(){
    $(".header").show();
    $(".page-navigator").show();
    $(".footer").show();
    $("#inl").show();
    $("#poz").show();
    $("#mar").animate({
        top:"230px"});
    $("#ret").hide();
    $(".mar").hide("slow");
    });
});