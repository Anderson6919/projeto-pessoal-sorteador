const sorteiaCor = require("../src/sorteiaCor");

test("Sorteia uma cor aleatória", () => {
    const cores = ["vermelho", "azul", "verde", "amarelo", "preto", "branco"];
    expect(cores).toContain(sorteiaCor());
});