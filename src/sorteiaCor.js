function sorteiaCor() {
    const cores = ["vermelho", "azul", "verde", "amarelo", "preto", "branco"];
    return cores[Math.floor(Math.random() * cores.length)];
}

module.exports = sorteiaCor;