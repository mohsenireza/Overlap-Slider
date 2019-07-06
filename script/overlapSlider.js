$(".slider").css({ width: ($(".item").length * 100) + "%" }).find(".item").css({ width: (100 / $(".item").length) + "%" });

function move(dir) {
    $(".item").css({ animation: "" });
    if (dir == "right") {
        $(".focus").removeClass("focus").addClass("passed").next(".item").removeClass("passed").addClass("focus").prev(".passed").prev(".passed").removeClass("passed");
        $(".passed").css({ animation: "rightPassed ease-in-out 0.5s" }).next(".focus").css({ animation: "rightSelected ease-in-out 0.5s" });
    } else if (dir == "left") {
        $(".focus").removeClass("focus").addClass("passed").prev(".item").removeClass("passed").addClass("focus").next(".passed").next(".passed").removeClass("passed");
        $(".passed").css({ animation: "leftPassed ease-in-out 0.5s" }).prev(".focus").css({ animation: "leftSelected ease-in-out 0.5s" });
    }
    $(".slider").css({ left: (-$(".focus").index() * $(".item").innerWidth()) + "px" });
}

$(".right").click(function () {
    if ($(".focus").next(".item").length) { move("right") }
    else {
        $(".item").removeClass("passed focus").eq(0).addClass("focus");
        move();
    }
});

$(".left").click(function () { if ($(".focus").prev(".item").length) { move("left") } });

$(".slider").on("click", ".item", function () {
    if (($(this).index() - $(".focus").index()) == 1) { move("right") }
    else if (($(this).index() - $(".focus").index()) == -1) { move("left") }
    else {
        $(".item").removeClass("passed focus").eq($(this).index()).addClass("focus");
        move();
    }
});