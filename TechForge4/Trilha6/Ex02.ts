/*Implemente uma classe UserManager que gerencie a criação de usuários e envie notificações por email.

Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
Em seguida, refatore para dividir a responsabilidade de envio de notificação em uma classe EmailNotification.
Objetivo: Aumentar a coesão separando a lógica de notificação e reduzir o acoplamento ao injetar EmailNotification na UserManager.*/

class EmailNotification {
    sendEmail(to: string, subject: string, body: string): void {
        console.log(`Sending email to ${to}...`);
        console.log(`Subject: ${subject}`);
        console.log(`Body: ${body}`);
    }
}

class UserManager {
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser(name: string, email: string): void {
        console.log(`Criar Usuario: ${name}`);
        const user = { name, email };

        this.emailNotification.sendEmail(
            email,
            "Bem-vindo à nossa plataforma",
            `Olá ${name}, bem-vindo à nossa plataforma`
        );

        console.log("Usuário criado com sucesso:", user);
    }
}

const emailNotification = new EmailNotification();
const userManager = new UserManager(emailNotification);
userManager.createUser("Eduardo", "Eduardo@gmail.com");