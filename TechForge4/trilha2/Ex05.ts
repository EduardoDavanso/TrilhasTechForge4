/*Crie uma classe Agenda que tenha um atributo compromissos (array de strings). 
Adicione métodos para adicionar compromissos e listar todos os compromissos.*/

class Agenda {
    private compromissos: string[];

    constructor(compromissos: string[]) {
        this.compromissos = compromissos;
    }

    public apresentar() {
        console.log("Seguintes compromissos: ${this.compromissos}");
    }
}

const agenda1 = new Agenda (["Aniversário do Jubileu"," Aniversario de Namoro"," Ano Novo"]);
agenda1.apresentar();