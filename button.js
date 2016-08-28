function showText(el) {
    if (el.previousElementsibling.clientHeight===400){
        el.previousElementsibling.style.height="100%"
        el.InnerHTML="Show less...";
    }
    else{
        el.previousElementsibling.style.height="80px";
        el.InnerHTML="Read more...";
    }
    }
