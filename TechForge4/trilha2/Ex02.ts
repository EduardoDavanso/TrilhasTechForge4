/*Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). 
Adicione um método para marcar o livro como lido.*/

class Livro {
    private titulo: string;
    private autor: string;
    private pagina: number;
    private lido: boolean;

    constructor(titulo:string, autor:string, paginas: number, lido: boolean) {
        this.titulo = titulo;
        this.autor = autor;
        this.pagina = paginas;
        this.lido = lido;
    }

    public livroLido(lido:boolean) {
        this.lido = lido;
    }

    public apresentarLivro() {
        if(this.lido == true) {
            console.log("Você leu")
        } else {
            console.log("Você não leu")
        }
    }
}

const livro1 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 85, false)
livro1.livroLido(false)
livro1.apresentarLivro();