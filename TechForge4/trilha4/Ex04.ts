//Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean). 
//Crie uma classe Biblioteca que contenha um array de livros que implementem Livro. 
//Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true.//

interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livro[] = [];

    adicionarLivro(livro: Livro) {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: true });
biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: false });
biblioteca.adicionarLivro({ titulo: "A Revolução dos Bichos", autor: "George Orwell", disponivel: true });

console.log(biblioteca.buscarLivrosDisponiveis());