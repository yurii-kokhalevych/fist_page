$(function(){
    $("#mar9").click(function(){
        $(".mar9").show("slow");
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
        $("#ret").hide();
        $("#ret9").animate({
          top: 0,
          left: 0,
        });
        $("#ret9").show();
    });
    
    $("#ret9").click(function(){
    $(".header").show();
    $(".page-navigator").show();
    $(".footer").show();
    $("#inl").show();
    $("#poz").show();
    $("#mar9").animate({
        top:"575px",
        left:"0px"
    });
    $("#ret9").hide();
    $(".mar9").hide("slow");
    });
});