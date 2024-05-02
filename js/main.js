$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $(".parallax-container").css("left", -0.5 * scroll + "px"); // 調整視差效果的速度
    });
});
