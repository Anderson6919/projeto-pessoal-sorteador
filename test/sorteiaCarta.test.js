const sorteiaCarta = require("../src/sorteiaCarta");

test("Sorteia uma carta de baralho", () => {
    const carta = sorteiaCarta();
    expect(typeof carta).toBe("string");
    expect(carta).toMatch(/^(Ás|2|3|4|5|6|7|8|9|10|Valete|Dama|Rei) de (Copas|Ouros|Espadas|Paus)$/);
});