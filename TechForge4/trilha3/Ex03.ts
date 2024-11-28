/*Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação
do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.*/

class Pagamento {
    public processar(): void {}
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao:string) {
        super()
        this.numeroCartao = numeroCartao;
    }

    private validarCartao(): boolean {//Validar o Cartão se tem 16 dígitos;
        return this.numeroCartao.length === 16 && !isNaN(Number(this.numeroCartao))
    }

    processar() {
        if (this.validarCartao()) {
            console.log(`Número do Cartão válido! N° Cartão: ${this.numeroCartao}`)
        } else {
            console.log("Número do cartão INVÁLIDO!")
        }
    }
}

class PagamentoBoleto extends Pagamento {
    private valor: number;

    constructor(valor:number) {
        super()
        this.valor = valor;
    }

    private gerarCodigoBoleto(): string {
        let codigo = '';
        for(let i=0; i < 10; i++) {
            codigo += Math.floor(Math.random() * 10).toString();
        }
        return codigo;
    }

    public processar(): void {
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`Código boleto: ${codigoBoleto}. Valor: R$${this.valor.toFixed(2)}.`);
    }
}

function processarPagamento(pagamento: Pagamento) {//Função para processar outros pagamentos
    pagamento.processar();
}

const pagamentoCartao = new PagamentoCartao("1549456411984567");
processarPagamento(pagamentoCartao); 


const pagamentoBoleto = new PagamentoBoleto(192.99);
processarPagamento(pagamentoBoleto);