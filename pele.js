$(function(){
    $("#mar6").click(function(){
        $(".mar6").show("slow");
        $(".footer").hide();
        $(".header").hide();
        $(".page-navigator").hide();
        $("#inl").hide();
        $("#ret1").hide();
        $("#ret2").hide();
        $("#ret3").hide();
        $("#ret4").hide();
        $("#ret5").hide();
        $("#ret").hide();
        $("#ret7").hide();
        $("#ret8").hide();
        $("#ret9").hide();
        $("#ret6").animate({
          top: 0,
          left: 0,
        });
        $("#ret6").show();
    });
    
    $("#ret6").click(function(){
    $(".header").show();
    $(".page-navigator").show();
    $(".footer").show();
    $("#inl").show();
    $("#poz").show();
    $("#mar6").animate({
        top:"230px",
        left:"550px"
    });
    $("#ret6").hide();
    $(".mar6").hide("slow");
    });
});