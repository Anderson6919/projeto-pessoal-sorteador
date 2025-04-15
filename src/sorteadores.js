function sorteiaCarta() {
    const naipes = ["Copas", "Ouros", "Espadas", "Paus"];
    const valores = ["Ás", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valete", "Dama", "Rei"];
    return valores[Math.floor(Math.random() * valores.length)] + " de " + naipes[Math.floor(Math.random() * naipes.length)];
}

function sorteiaCor() {
    const cores = ["vermelho", "azul", "verde", "amarelo", "preto", "branco"];
    return cores[Math.floor(Math.random() * cores.length)];
}

function sorteiaDecimal() {
    return Math.random();
}

function sorteiaDiaSemana() {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return dias[Math.floor(Math.random() * dias.length)];
}

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

function sorteiaItem(lista) {
    if (lista.length === 0) throw new Error("Lista vazia");
    return lista[Math.floor(Math.random() * lista.length)];
}

function sorteiaNome(lista) {
    if (lista.length === 0) throw new Error("Lista vazia");
    return lista[Math.floor(Math.random() * lista.length)];
}

function sorteiaNumero100() {
    return Math.floor(Math.random() * 100) + 1;
}

function sorteiaNumeroIntervalo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sorteiaSenha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let senha = "";
    for (let i = 0; i < 8; i++) {
        senha += chars[Math.floor(Math.random() * chars.length)];
    }
    return senha;
}

module.exports = {
    sorteiaCarta,
    sorteiaCor,
    sorteiaDecimal,
    sorteiaDiaSemana,
    sorteiaGrupo,
    sorteiaItem,
    sorteiaNome,
    sorteiaNumero100,
    sorteiaNumeroIntervalo,
    sorteiaSenha
};
