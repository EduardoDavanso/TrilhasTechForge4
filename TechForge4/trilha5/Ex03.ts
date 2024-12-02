// 3. Gerenciador de Favoritos
// Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos abstratos addFavorite(item: string): void e getFavorites(): string[].

// Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
// MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método sort para arrays em JavaScript
// BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. 

// Classe abstrata FavoriteManager
abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

// Subclasse MoviesFavoriteManager
class MoviesFavoriteManager extends FavoriteManager {
    private favorites: Set<string> = new Set(); // Usamos um Set para evitar duplicatas

    addFavorite(item: string): void {
        this.favorites.add(item); 
    }

    getFavorites(): string[] {

        return Array.from(this.favorites).sort();
    }
}

// Subclasse BooksFavoriteManager
class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = []; // Usamos um array para gerenciar a lista de livros

    addFavorite(item: string): void {
        this.favorites.unshift(item); // Adiciona o item no início da lista
    }

    getFavorites(): string[] {
    
        return this.favorites;
    }
}

// Exemplo de uso
const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("Inception");
moviesManager.addFavorite("The Matrix");
moviesManager.addFavorite("Interstellar");
moviesManager.addFavorite("Inception"); 

console.log("Filmes Favoritos:");
console.log(moviesManager.getFavorites());

const booksManager = new BooksFavoriteManager();
booksManager.addFavorite("1984");
booksManager.addFavorite("Brave New World");
booksManager.addFavorite("The Catcher in the Rye");

console.log("Livros Favoritos:");
console.log(booksManager.getFavorites());