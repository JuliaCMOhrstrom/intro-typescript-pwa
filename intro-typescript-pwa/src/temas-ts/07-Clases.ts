//CLases

class Persona{
    private nombre:string;
    private edad:number;

    setNombre(a:string) : void{
        this.nombre = a;
    }

    private imprimePersona(){
        console.log(`Nombre: ${this.nombre} \n Edad: ${this.edad}`)
    }
    metodoAlterno(){
        this.imprimePersona();
    }
    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;

    }
}

let persona1:Persona;
persona1 = new Persona('Jose', 14);
let persona2 = new Persona('Lala', 15);

//persona1.nombre = 'María'
persona1.setNombre('Lorena');
persona2.setNombre('Josue')

persona1.metodoAlterno();
persona2.metodoAlterno();

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor = Math.floor(Math.random()*6)+1;
    }
    imprimir(){
        console.log(`Salio el valor: ${this.valor}`);
    }
}
let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();