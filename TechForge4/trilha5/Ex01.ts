//1. Sistema de Tarefas e Projetos
// Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].
// Crie duas subclasses: Project e DailyTasks.
// Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
// DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
// Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.//

// Classe abstrata TaskManager
abstract class TaskManager {
    protected tasks: string[] = [];

    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

// Subclasse Project
class Project extends TaskManager {
    addTask(task: string): void {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
        } else {
            console.log(`A tarefa "${task}" já existe no projeto.`);
        }
    }

    listTasks(): string[] {
        return this.tasks;
    }
}

// Subclasse DailyTasks
class DailyTasks extends TaskManager {
    addTask(task: string): void {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
        } else {
            console.log(`A tarefa "${task}" já existe nas tarefas diárias.`);
        }
    }

    listTasks(): string[] {
        return this.tasks;
    }
}

const project = new Project();
project.addTask("Desenvolver a interface do usuário");
project.addTask("Configurar o banco de dados");
project.addTask("Desenvolver a interface do usuário");

console.log("Tarefas do Projeto:");
console.log(project.listTasks());

const dailyTasks = new DailyTasks();
dailyTasks.addTask("Estudar TypeScript");
dailyTasks.addTask("Fazer exercícios de programação");
dailyTasks.addTask("Estudar TypeScript");
console.log("Tarefas Diárias:");
console.log(dailyTasks.listTasks());