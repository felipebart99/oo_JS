class Animal {
  constructor(nome, patas, voa) {
    this.nome = nome;
    this.patas = patas;
    this.voa = voa;
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }
}

// Classe herdeira 1
class Gato extends Animal {
  constructor(nome) {
    super(nome, 4, false);
  }

  barulho() {
    console.log("MIAU");
  }
}

// Classe herdeira 2
class Passaro extends Animal {
  constructor(nome) {
    super(nome, 2, true);
  }

  barulho() {
    console.log("PIU PIU");
  }
}

// Classe herdeira 3
class Cachorro extends Animal {
  constructor(nome) {
    super(nome, 4, false);
  }

  barulho() {
    console.log("AU AU");
  }
}

const gato = new Gato("Mingau");
const passaro = new Passaro("Pardal");
const cachorro = new Cachorro("Toby");

gato.comer();
gato.barulho();

passaro.comer();
passaro.barulho();

cachorro.comer();
cachorro.barulho();
