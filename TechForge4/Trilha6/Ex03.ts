/*Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.

Implemente a validação e o envio de email na mesma classe.
Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento.*/

class ContactValidator {
    validate(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

class EmailSender {
    private contactValidator: ContactValidator;

    constructor(contactValidator: ContactValidator) {
        this.contactValidator = contactValidator;
    }

    sendEmail(contact: string, subject: string, body: string): void {
        if (!this.contactValidator.validate(contact)) {
            throw new Error(`Contato inválido: ${contact}`);
        }

        console.log(`Enviando email para ${contact}...`);
        console.log(`Assunto: ${subject}`);
        console.log(`Body: ${body}`);
        console.log("Email enviado com sucesso!");
    }
}

const contactValidator = new ContactValidator();
const emailSender = new EmailSender(contactValidator);

try {
    emailSender.sendEmail("john.doe@exemplo.com", "Olá!", "Esse é o seu e-mail teste.");
    emailSender.sendEmail("email-invalido@", "Olá!", "Isso deve falhar.");
} catch (error) {
    console.error(error.message);
}
