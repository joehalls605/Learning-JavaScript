function makeMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

double(2);
triple(3);