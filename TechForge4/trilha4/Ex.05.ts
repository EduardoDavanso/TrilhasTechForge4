//Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
 //- Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.
//Implemente os seguintes métodos:
 //- filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.
 //- buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.
 //- obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.//
 
 interface LivroBiblioteca {
    titulo:string;
    autor:string;
    genero:string;
    disponivel:boolean;
}

class BibliotecaGestao implements LivroBiblioteca {
    private Livros: LivroBiblioteca[] = [];
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;

    constructor(livrosBiblioteca:LivroBiblioteca[]) {
        this.Livros = livrosBiblioteca;
    }

    filtrarPorGenero(genero:string): LivroBiblioteca[] {
        return this.Livros.filter((adcLivros) => adcLivros.genero === genero);
    }

    buscarPorAutor(autor:string): LivroBiblioteca[] {
        return this.Livros.filter((adcLivros) => adcLivros.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.Livros
            .sort((a,b) => a.titulo.localeCompare(b.titulo));
    }

}

const adcLivros: LivroBiblioteca[] = [
    {titulo: '1984', autor: 'George Orwell', genero: 'Ficção científica', disponivel: true},
    {titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Alta fantasia', disponivel: false},
    {titulo: 'A Revolução dos Bichos', autor: 'George Orwell', genero: 'Fábula', disponivel: false},
];

//instanciar
const respostaLivros = new BibliotecaGestao(adcLivros);

console.log(respostaLivros.filtrarPorGenero("Ficção científica"));
console.log(respostaLivros.buscarPorAutor("George Orwell"));
console.log(respostaLivros.obterLivrosDisponiveisOrdenados());