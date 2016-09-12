$(function(){
    $("#mar8").click(function(){
        $(".mar8").show("slow");
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
        $("#ret").hide();
        $("#ret9").hide();
        $("#ret8").animate({
          top: 0,
          left: 0,
        });
        $("#ret8").show();
    });
    
    $("#ret8").click(function(){
    $(".header").show();
    $(".page-navigator").show();
    $(".footer").show();
    $("#inl").show();
    $("#poz").show();
    $("#mar8").animate({
        top:"535px",
        left:"0px"
    });
    $("#ret8").hide();
    $(".mar8").hide("slow");
    });
});