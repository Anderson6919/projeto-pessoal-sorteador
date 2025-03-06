const sorteiaDiaSemana = require("../src/sorteiaDiaSemana");

test("Sorteia um dia da semana", () => {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    expect(dias).toContain(sorteiaDiaSemana());
});