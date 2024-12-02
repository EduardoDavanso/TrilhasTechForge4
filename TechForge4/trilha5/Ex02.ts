// 2. Inventário de Itens
// Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript

// Crie duas subclasses WarehouseInventory e StoreInventory.
// WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
// StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
// Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.

// Classe abstrata Inventory

abstract class Inventory {
    protected items: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

// Subclasse WarehouseInventory
class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            this.items[item] += quantity;
        } else {
            this.items[item] = quantity;
        }
    }

    removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
        } else {
            console.log(`Item "${item}" não encontrado no inventário.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

// Subclasse StoreInventory
class StoreInventory extends Inventory {
    private readonly maxQuantity: number = 10;

    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            if (this.items[item] + quantity > this.maxQuantity) {
                console.log(`Não é possível adicionar ${quantity} unidades de "${item}". Limite máximo de ${this.maxQuantity} unidades por item.`);
                return;
            }
            this.items[item] += quantity;
        } else {
            if (quantity > this.maxQuantity) {
                console.log(`Não é possível adicionar "${item}". Limite máximo de ${this.maxQuantity} unidades por item.`);
                return;
            }
            this.items[item] = quantity;
        }
    }

    removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
        } else {
            console.log(`Item "${item}" não encontrado no inventário.`);
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

// Exemplo de uso
const warehouse = new WarehouseInventory();
warehouse.addItem("Caixa de ferramentas", 50);
warehouse.addItem("Parafuso", 200);
warehouse.removeItem("Parafuso");

console.log("Inventário do Armazém:");
console.log(warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Produto A", 5);
store.addItem("Produto B", 10);
store.addItem("Produto A", 6); 
store.removeItem("Produto C");

console.log("Inventário da Loja:");
console.log(store.getInventory());