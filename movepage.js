$(function () {
    $("body div").fadeIn(200, function () {
        $(this).animate({
            "top": "150px"
        },400);
    });
    
    $("a").click(function () {
        var url = $(this).attr("href");
        $("body div").animate({
            "opacity": "0",
            "top": "10px"
        },200, function () {
            document.location.href = url;
        });
        
        return false;
    });
});
