const sorteiaNome = require("../src/sorteiaNome");

test("Sorteia um nome de uma lista", () => {
    const lista = ["Alice", "Bob", "Carlos"];
    expect(lista).toContain(sorteiaNome(lista));
});