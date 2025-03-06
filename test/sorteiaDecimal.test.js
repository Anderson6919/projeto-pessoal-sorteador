const sorteiaDecimal = require("../src/sorteiaDecimal");

test("Sorteia um número decimal entre 0 e 1", () => {
    const decimal = sorteiaDecimal();
    expect(decimal).toBeGreaterThanOrEqual(0);
    expect(decimal).toBeLessThan(1);
});