/*Crie uma classe Temperatura com um atributo valor (number em Celsius). 
Adicione métodos para converter o valor para Fahrenheit e Kelvin.*/

class Temperatura {
    private valor: number;
    
    constructor(valorC: number) {
        this.valor = valorC;
    }

    public calcularF() {
        let valorF = (this.valor * 9) + (5*32);
        valorF = valorF / 5;
        console.log(`${this.valor}°C em Fahrenheit é ${valorF}°F`);
    }

    public calcularK() {
        let valorK = this.valor + 273.15
        console.log(`${this.valor}°C em Kelvin é ${valorK} K`);
    }
}

const temp1 = new Temperatura(38);
temp1.calcularF();

const temp2 = new Temperatura(36);
temp2.calcularK();