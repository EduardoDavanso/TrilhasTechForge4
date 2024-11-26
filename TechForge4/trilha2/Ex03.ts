/*Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). 
Adicione um método para calcular o valor total em estoque (preço * quantidade).*/

class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nomeProduto:string, preco:number, quantidadeCompra:number) {
        this.nome = nomeProduto;
        this.preco = preco;
        this.quantidade = quantidadeCompra;
    }

    public calcularTotal() {
        let total = this.preco * this.quantidade;
         console.log(`${this.quantidade} unidades do produto ${this.nome}, 
            de R$${this.preco},00 cada, ficando R$${total},00`)

    }
}

const produto1 = new Produto ("Iphone 16", 8000, 10);
produto1.calcularTotal()