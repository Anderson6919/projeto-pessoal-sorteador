function sorteiaDiaSemana() {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return dias[Math.floor(Math.random() * dias.length)];
}

module.exports = sorteiaDiaSemana;