
let nombres:string[] = ['Mario', 'Dario', 'Juan']

console.log(nombres);

let datos:(boolean|number|string)[] = ['Mario', 23, true, 'Lopez']
console.log(datos);


datos.push(200);
datos.push('Mario');
datos.push(false);
console.log(datos);

//otra forma de crear arreglos
let arreglo: Array<number> = [1,2,3,4]

const nombre1:string = 'datos1';

interface Alumno{
    matricula:string, 
    nombre:string, 
    edad:number,
    email:string,
    materias?:string[]

    //se agrega el signo de interrogación como opcional
}
const alumno:Alumno ={

    matricula:'19002494',
    nombre:'Julia',
    edad: 22,
    email: 'monreal_julia@hotmail.com',
    materias:['PWA']
}

alumno.nombre = 'Ohrstrom';

console.log(alumno);