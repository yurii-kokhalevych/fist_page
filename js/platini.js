$(function(){
    $("#mar5").click(function(){
        $(".mar5").show("slow");
        $(".footer").hide();
        $(".header").hide();
        $(".page-navigator").hide();
        $("#inl").hide();
        $("#ret1").hide();
        $("#ret2").hide();
        $("#ret3").hide();
        $("#ret4").hide();
        $("#ret").hide();
        $("#ret6").hide();
        $("#ret7").hide();
        $("#ret8").hide();
        $("#ret9").hide();
        $("#ret5").animate({
          top: 0,
          left: 0,
        });
        $("#ret5").show();
    });
    
    $("#ret5").click(function(){
    $(".header").show();
    $(".page-navigator").show();
    $(".footer").show();
    $("#inl").show();
    $("#poz").show();
    $("#mar5").animate({
        top:"415px",
        left:"0px"
    });
    $("#ret5").hide();
    $(".mar5").hide("slow");
    });
});