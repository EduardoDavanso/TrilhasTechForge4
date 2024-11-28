/*Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.*/

class Animal {
    private energia: number;
  
    constructor(energiaInicial: number) {
      this.energia = energiaInicial;
    }
  
    // Método para alterar a energia
    protected alterarEnergia(valor: number): void {
      this.energia += valor;
      if (this.energia < 0) this.energia = 0; // Garante que a energia não fique negativa
    }
  
    // Método para exibir o nível de energia
    public statusEnergia(): void {
      console.log(`${this.constructor.name} tem ${this.energia} de energia.`);
    }
  
    // Método genérico para comer (pode ser sobrescrito)
    public comer(): void {
    console.log(`${this.constructor.name} está comendo..`);
      this.alterarEnergia(10);
    }
}
  
  // Subclasse Leao
  class Leao extends Animal {
    public comer(): void {
        console.log("O leão está caçando...");
        this.alterarEnergia(-20); // Gasta energia caçando
        console.log("O leão está comendo...");
        this.alterarEnergia(50); // Recupera energia comendo
    }
}
  
// Subclasse Passaro
class Passaro extends Animal {
    public comer(): void {
      console.log("O pássaro está comendo sementes...");
      this.alterarEnergia(15); // Apenas recupera energia;
    }
}  