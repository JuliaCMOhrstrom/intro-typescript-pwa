// manejo de funciones

function sumar(a:number,b?:number):number{
    return a+b;

}

console.log(sumar(4));

// 1
function sumar1(a,b){
    return a+b;
}

console.log(sumar1(2,8));

// sumar 2
function sumar2(a:number,b:number,c:number = 0):number{
    /*if(c){
      return a+b+c;  
    }
    else{
        return a+b;
    }*/
    return a+b+c;
}
console.log(sumar2(4,4));
console.log(sumar2(5,7,8))


function sumar0(a:number,b:number,c:number = 0):void{
    console.log(a+b+c);
}

console.log(sumar0(2,2,2))


function multiplicar(numero:number, otronumero?:number, base:number = 2):number{
    return numero*base;
}

const resultado = multiplicar(7,0,12);
console.log(resultado);

interface Alumno2{
    nombre:string;
    edad:number;
    muestraEdad:()=>void;
}

function cursar(alumno:Alumno2, nuevaEdad:number):void{
    alumno.edad+= nuevaEdad;
    console.log(alumno);

}

const nuevoAlumno:Alumno2={
    nombre: 'Julia',
    edad: 22,
    muestraEdad() {
        console.log('Edad de Alumno:' ,this.edad);
    },
}
console.log(nuevoAlumno, 23)