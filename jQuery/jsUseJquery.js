$(document).ready(
    $("#links").on("click" , function(){
        $("#sidbar").toggleClass("avtive")
    }),
    $(document).on("click" , function(e){
        if( e.target.id !== "links"){
            $("#sidbar").removeClass("avtive") ;
        }
    })
)