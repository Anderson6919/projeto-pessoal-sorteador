function sorteiaCarta() {
    const naipes = ["Copas", "Ouros", "Espadas", "Paus"];
    const valores = ["Ás", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valete", "Dama", "Rei"];
    const carta = valores[Math.floor(Math.random() * valores.length)] + " de " + naipes[Math.floor(Math.random() * naipes.length)];
    return carta;
}

module.exports = sorteiaCarta;