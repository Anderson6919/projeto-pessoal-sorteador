const sorteiaGrupo = require("../src/sorteiaGrupo");

test("Sorteia um grupo de pessoas", () => {
    const lista = ["Ana", "Bruno", "Clara", "Diego", "Eva"];
    const grupo = sorteiaGrupo(lista, 3);
    expect(grupo.length).toBe(3);
    grupo.forEach(pessoa => expect(lista).toContain(pessoa));
});