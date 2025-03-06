function sorteiaNome(lista) {
    if (lista.length === 0) throw new Error("Lista vazia");
    return lista[Math.floor(Math.random() * lista.length)];
}

module.exports = sorteiaNome;