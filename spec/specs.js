describe('equilateral', function() {

    it("returns 'equilateral' when given a triangle with three equal sides", function() {
        expect(triangleTracker(1, 1, 1)).to.equal("equilateral");
    });

    it("returns 'isosceles' when given a triangle with two equal sides", function() {
        expect(triangleTracker(2, 2, 3)).to.equal("isosceles");
    });

    it("returns 'scalene' when given a triangle with three uneven sides", function() {
        expect(triangleTracker(2, 3, 4)).to.equal("scalene");
    });

    it("returns 'invalid' when given invalid side lengths", function() {
        expect(triangleTracker(4, 4, 9)).to.equal("invalid");
    });

});
