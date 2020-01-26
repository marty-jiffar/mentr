$(document).ready(function() {
   var current = 1;
    
    $(".con").fadeOut();
    $(".con1").fadeIn();
    window.addEventListener("keyup", function(e){
       console.log(e);
        if(e.code === "Space") {
            console.log("Yayy");
            $(".con"+current).fadeOut("slow", function(){
                current = current +1;
                $(".con"+current).fadeIn("slow");
            });
        }
    });

});