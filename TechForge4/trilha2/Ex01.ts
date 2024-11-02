/*Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). 
Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.*/
class ContaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular:string, saldo:number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public depositar() {
       let resposta: string | null = prompt("Digite seu deposito: ");
       
       if(resposta !== null) {
            const depositou = parseFloat(resposta);
            this.saldo = this.saldo + depositou;
            console.log(`Você depositou ${depositou}. Saldo: ${this.saldo},00`)
       } else {
            console.log("Deposito concelado!");
       }
    }

    public sacar() {
        let resposta: string | null = prompt("Quantidade para sacar: ");

        if(resposta !== null) {
            const sacou = parseFloat(resposta);
            this.saldo = this.saldo - sacou;
            console.log(`Você sacou ${sacou}. Saldo: ${this.saldo},00`)
        } else {
            console.log("Saque cancelado!")
        }
    }
}

//DEPOSITAR
const contaBanc1 = new ContaBancaria ("Jorge", 30000);
contaBanc1.depositar();

//SACAR
const contaBanc2 = new ContaBancaria ("Marcio", 300000);
contaBanc2.sacar();