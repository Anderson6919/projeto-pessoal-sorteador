function sorteiaGrupo(lista, tamanho) {
    if (lista.length < tamanho) throw new Error("Tamanho maior que a lista");
    const grupo = [];
    const listaCopia = [...lista];

    for (let i = 0; i < tamanho; i++) {
        const index = Math.floor(Math.random() * listaCopia.length);
        grupo.push(listaCopia.splice(index, 1)[0]);
    }
    return grupo;
}

module.exports = sorteiaGrupo;