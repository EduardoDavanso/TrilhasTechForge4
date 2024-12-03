/*Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.

Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.*/

class Cart {
    private items: { name: string; price: number; quantity: number }[] = [];

    addItem(name: string, price: number, quantity: number): void {
        this.items.push({ name, price, quantity });
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    getItems(): { name: string; price: number; quantity: number }[] {
        return this.items;
    }
}

class Payment {
    private status: string = "pending"; 

    process(totalPrice: number): void {
        if (totalPrice > 0) {
            this.status = "paid";
        } else {
            throw new Error("Não é possível processar o pagamento de um pedido vazio.");
        }
    }

    getStatus(): string {
        return this.status;
    }
}

class Shipping {
    private status: string = "not shipped"; 

    updateStatus(paymentStatus: string, status: string): void {
        if (paymentStatus === "paid") {
            this.status = status;
        } else {
            throw new Error("O pedido deve ser pago antes de atualizar o status do envio.");
        }
    }

    getStatus(): string {
        return this.status;
    }
}

class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;

    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }

    addItem(name: string, price: number, quantity: number): void {
        this.cart.addItem(name, price, quantity);
    }

    processPayment(): void {
        const totalPrice = this.cart.getTotalPrice();
        this.payment.process(totalPrice);
    }

    updateShippingStatus(status: string): void {
        const paymentStatus = this.payment.getStatus();
        this.shipping.updateStatus(paymentStatus, status);
    }

    getOrderDetails(): object {
        return {
            items: this.cart.getItems(),
            totalPrice: this.cart.getTotalPrice(),
            paymentStatus: this.payment.getStatus(),
            shippingStatus: this.shipping.getStatus(),
        };
    }
}

const order = new Order();
order.addItem("Notebook", 1500, 1);
order.addItem("Mouse", 50, 2);
order.processPayment();
order.updateShippingStatus("shipped");
console.log(order.getOrderDetails());