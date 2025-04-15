const {
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
  } = require('../src/sorteadores');
  
  test("Sorteia uma carta de baralho", () => {
    const carta = sorteiaCarta();
    expect(typeof carta).toBe("string");
    expect(carta).toMatch(/^(Ás|2|3|4|5|6|7|8|9|10|Valete|Dama|Rei) de (Copas|Ouros|Espadas|Paus)$/);
  });
  
  test("Sorteia uma cor aleatória", () => {
    const cores = ["vermelho", "azul", "verde", "amarelo", "preto", "branco"];
    expect(cores).toContain(sorteiaCor());
  });
  
  test("Sorteia um número decimal entre 0 e 1", () => {
    const decimal = sorteiaDecimal();
    expect(decimal).toBeGreaterThanOrEqual(0);
    expect(decimal).toBeLessThan(1);
  });
  
  test("Sorteia um dia da semana", () => {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    expect(dias).toContain(sorteiaDiaSemana());
  });
  
  test("Sorteia um grupo de pessoas", () => {
    const lista = ["Ana", "Bruno", "Clara", "Diego", "Eva"];
    const grupo = sorteiaGrupo(lista, 3);
    expect(grupo.length).toBe(3);
    grupo.forEach(pessoa => expect(lista).toContain(pessoa));
  });
  
  test("Sorteia um item de uma lista", () => {
    const lista = ["banana", "maçã", "laranja"];
    expect(lista).toContain(sorteiaItem(lista));
  });
  
  test("Sorteia um nome de uma lista", () => {
    const lista = ["Alice", "Bob", "Carlos"];
    expect(lista).toContain(sorteiaNome(lista));
  });
  
  test("Sorteia um número entre 1 e 100", () => {
    const numero = sorteiaNumero100();
    expect(numero).toBeGreaterThanOrEqual(1);
    expect(numero).toBeLessThanOrEqual(100);
  });
  
  test("Sorteia um número dentro de um intervalo", () => {
    const numero = sorteiaNumeroIntervalo(10, 20);
    expect(numero).toBeGreaterThanOrEqual(10);
    expect(numero).toBeLessThanOrEqual(20);
  });
  
  test("Sorteia uma senha de 8 caracteres", () => {
    const senha = sorteiaSenha();
    expect(senha).toHaveLength(8);
    expect(/^[A-Za-z0-9]{8}$/.test(senha)).toBe(true);
  });
  