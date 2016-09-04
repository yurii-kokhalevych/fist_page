$(function(){
    $("#mar7").click(function(){
        $(".mar7").show("slow");
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
        $("#ret").hide();
        $("#ret8").hide();
        $("#ret9").hide();
        $("#ret7").animate({
          top: 0,
          left: 0,
        });
        $("#ret7").show();
    });
    
    $("#ret7").click(function(){
    $(".header").show();
    $(".page-navigator").show();
    $(".footer").show();
    $("#inl").show();
    $("#poz").show();
    $("#mar7").animate({
        top:"230px",
        left:"610px"
    });
    $("#ret7").hide();
    $(".mar7").hide("slow");
    });
});