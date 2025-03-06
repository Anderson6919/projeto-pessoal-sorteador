const sorteiaItem = require("../src/sorteiaItem");

test("Sorteia um item de uma lista", () => {
    const lista = ["banana", "maçã", "laranja"];
    expect(lista).toContain(sorteiaItem(lista));
});