class person{
    private nombre:string;

    constructor(nombre: string )
    {
        this.nombre = nombre;
    }

    getnombre():string
    {
        return this.nombre;
    }

static metodoestatico():number 
{
    return 10;
}

}

let persona = new person("juan");
console.log(persona.getnombre());
console.log(person.metodoestatico())