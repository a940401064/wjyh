$(function(){
    $("#byzq").on("click","li",function(){
        $(this).children(":first-child").addClass("gift-first").parent().siblings().children(":first-child").removeClass("gift-first");
        
        var i=parseInt($(this).attr("data-byzq"))
       
        $(`#gift${i}`).addClass("show").siblings().removeClass("show");


    })












})