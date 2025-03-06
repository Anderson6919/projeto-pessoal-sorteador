const sorteiaSenha = require("../src/sorteiaSenha");

test("Sorteia uma senha de 8 caracteres", () => {
    const senha = sorteiaSenha();
    expect(senha).toHaveLength(8);
    expect(/^[A-Za-z0-9]{8}$/.test(senha)).toBe(true);
});