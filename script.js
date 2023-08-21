function turnRight() {
    turnEllipse(180);
}

function turnEllipse(degrees) {
    let angle = $("#header-nike").data("angle");
    if (!angle)
        angle = 0;
    angle = +angle + degrees;
    $("#header-nike")
        .data("angle", angle)
        .css({ transform: "rotateY(" + angle + "deg)", transition: "1s" });
}

