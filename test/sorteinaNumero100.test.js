const sorteiaNumero100 = require("../src/sorteiaNumero100");

test("Sorteia um número entre 1 e 100", () => {
    const numero = sorteiaNumero100();
    expect(numero).toBeGreaterThanOrEqual(1);
    expect(numero).toBeLessThanOrEqual(100);
});