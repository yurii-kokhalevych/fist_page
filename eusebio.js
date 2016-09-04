$(function(){
    $("#mar1").click(function(){
        $(".mar1").show("slow");
        $(".footer").hide();
        $(".header").hide();
        $(".page-navigator").hide();
        $("#inl").hide();
        $("#ret").hide();
        $("#ret2").hide();
        $("#ret3").hide();
        $("#ret4").hide();
        $("#ret5").hide();
        $("#ret6").hide();
        $("#ret7").hide();
        $("#ret8").hide();
        $("#ret9").hide();
        $("#ret1").animate({
          top: 0,
          left: 0,
        });
        $("#ret1").show();
    });
    
    $("#ret1").click(function(){
    $(".header").show();
    $(".page-navigator").show();
    $(".footer").show();
    $("#inl").show();
    $("#rez").hide();
    $("#mar1").animate({
        top:"230px",
        left:"100px" });
    $("#ret1").hide();
    $(".mar1").hide("slow");
    });
    });