const addition = require("../calc");

describe("Calculator", () => {

    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 55 for 33 + 22", () => {
            expect(addition(33, 22)).toBe(55);
        });
    });

    describe("Subtraction function", () => {
    });

    describe("Multiply function", () => {
    });

    describe("Division function", () => {
    });
})