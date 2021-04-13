$(function () {
    $("li").mouseover(function () {
        let index = $(this).index;
        $(".class").eq(index).show().siblings().hide()
    })
})