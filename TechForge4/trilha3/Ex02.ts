/*Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). rie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.*/

class FiguraGeometrica {
    protected area: number;

    constructor(area:number) {
        this.area = area;
    }

    public calcularArea() {
    }
}

class Circulo extends FiguraGeometrica {
    private raio: number;

     constructor(area:number, raio:number) {
        super(area);
        this.raio = raio;
    }

    calcularArea() {
        let raizQuadrada = 3.14;
        let res = raizQuadrada * this.raio * this.raio;
        this.area = res;
        console.log(`A área do circulo é ${this.area}`)
    }
}

class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;

    constructor(area:number, b:number, h:number) {
        super(area)
        this.base = b;
        this.altura = h;
    }

    calcularArea() {
        let res = (this.base * this.altura) / 2
        this.area = res;
        console.log(`A área do um triângulo é ${this.area} cm²`)
    }
}

class Quadrado extends FiguraGeometrica {
    private lateral: number;

    constructor(area:number, l:number) {
        super(area)
        this.lateral = l;
    }

    calcularArea() {
        this.area = this.lateral * this.lateral
        console.log(`A área do um quadrado é ${this.area} cm²`)
    }
}

const circulo = new Circulo(0, 9);
circulo.calcularArea();

const triangulo = new Triangulo(0, 12, 8);
triangulo.calcularArea();

const quadrado = new Quadrado(0, 6);
quadrado.calcularArea();