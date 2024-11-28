/*Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.*/

abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}
  
    // Método abstrato para calcular o bônus
    abstract calcularBonus(): number;
  
    // Método para calcular o salário final com bônus
    public calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }
  
    // Método para acessar o nome
    public getNome(): string {
        return this.nome;
    }
}

class Gerente extends Funcionario {
    // Bônus de 10% sobre o salário
    public calcularBonus(): number {
        return this["salario"] * 0.10;
    }
}

class Operario extends Funcionario {
    // Bônus de 5% sobre o salário
    public calcularBonus(): number {
      return this["salario"] * 0.05;
    }
}  

function calcularSalariosComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach((funcionario) => {
      const salarioFinal = funcionario.calcularSalarioComBonus();
      console.log(`${funcionario.getNome()} - Salário com bônus: R$ ${salarioFinal.toFixed(2)}`);
    });
}

const funcionarios: Funcionario[] = [
    new Gerente("Jorge", 6000),
    new Operario("Cleiton", 2000),
    new Gerente("Ana", 7000),
    new Operario("Julia", 1800)];

calcularSalariosComBonus(funcionarios);