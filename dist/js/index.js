$(function () {
    $(".nav li").on({
        mouseover: function () {
            // 让隐藏的盒子显示
            $(".h_box").show().hover(function () {
                $(this).show();
            }, function () {
                $(this).hide();
            });


            // li的下线切换
            $(this).css("border-color", "#81d8d0").siblings().css("border-color", "transparent");

            let index = $(this).index();
            console.log('我来了');
            $(".h_box div").eq(index).css({
                display: "block"
            }).siblings().css("display", "none")
        },
        mouseout: function () {
            $(".h_box").hide();
        }
    });


    // 轮播
    let rigc = 0;
    $(".leftou").hide();
    $(".leftou").click(function () {
        rigc--;
        if (rigc != -1) {
            $(".rigtou").on("click");
        } else {
            $(this).off("click");
            $(".rigtou").on("click");
        }

        if (rigc == 0) {
            $(".baobox").stop().animate({
                left: "-10px"
            });
            $(".leftou").hide();
            $(".rigtou").on("click");
        }
        if (rigc == 1) {
            $(".baobox").stop().animate({
                left: "-1020px"
            });
            $(".rigtou").on("click");
        }
    })
    $(".rigtou").click(function () {
        rigc++;
        console.log("lll");
        $(".baobox").stop().animate({
            left: "-2030px"
        });
        if (rigc == 2) {
            $(".baobox").stop().animate({
                left: "-3050px"
            });
            $(this).off("click");
        }
        $(".leftou").show();
        if ($(".baobox").prop("left") == 0) {
            $(".leftou").hide();
        }
    })
})