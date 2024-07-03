"use strict";
class person {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getnombre() {
        return this.nombre;
    }
    static metodoestatico() {
        return 10;
    }
}
let persona = new person("juan");
console.log(persona.getnombre());
console.log(person.metodoestatico());
