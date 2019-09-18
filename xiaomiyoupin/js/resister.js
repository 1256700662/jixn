$(function () {
    $("#register").click(function () {
        $(".clickwindow").slideDown().fadeOut().fadeIn().delay(200000).slideUp();
    })
    $(".span1").click(function () {
        window.open("../html/register.html");
    })
    $(".span2").click(function () {
        window.open("../html/xiaomi.html")
    })
})