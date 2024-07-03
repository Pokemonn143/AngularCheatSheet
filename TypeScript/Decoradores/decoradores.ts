function saludar(target: Function): void {
    target.prototype.Saludos = function (): void {
        console.log("Hola desde decoradores");
    };
}

@saludar
class Hola {
    constructor() { }
}

let hola1 = new Hola();
hola1.Saludos();