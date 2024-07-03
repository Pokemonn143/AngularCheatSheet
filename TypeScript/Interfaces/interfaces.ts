interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarpass?:string;
}

let Usuario1:Usuario = {nombreUsuario: "Juan ", password: "1234", confirmarpass: "1234"}

console.log (Usuario1);

interface abordar{
    abordartransporte():void;
}

let avion : abordar = {
    abordartransporte: function (){
        console.log("Abordando");
    }
}

avion.abordartransporte();