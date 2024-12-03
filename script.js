class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        //- tipo (ex: guerreiro, mago, monge, ninja )
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso
const heroi1 = new Heroi('Gandalf', 100, 'mago');
heroi1.atacar(); // O mago atacou usando usou magia

const heroi2 = new Heroi('Conan', 30, 'guerreiro');
heroi2.atacar(); // O guerreiro atacou usando usou espada

const heroi3 = new Heroi('Tigre', 25, 'monge');
heroi3.atacar(); // O monge atacou usando usou artes marciais

const heroi4 = new Heroi('Shinobi', 20, 'ninja');
heroi4.atacar(); // O ninja atacou usando usou shuriken