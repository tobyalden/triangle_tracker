var triangleTracker = function(side1, side2, side3) {
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
        return "invalid";
    } else if (side1 === side2 && side2 === side3) {
        return "equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "isosceles";
    } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
        return "scalene";
    }
};

$(document).ready(function() {
    $("form#triangle_tracker").submit(function(event) {
        var side1 = parseInt($("input#side1").val());
        var side2 = parseInt($("input#side2").val());
        var side3 = parseInt($("input#side3").val());
        var result = triangleTracker(side1, side2, side3);

        $(".triangle_type").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
