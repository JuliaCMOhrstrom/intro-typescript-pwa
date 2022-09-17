
interface Detalles{
    autor:string;
    year:number;
}

interface Reproductor{
    volumne:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

const reproductor:Reproductor={
    volumne: 90,
    segundo: 66,
    cancion: 'Mañanitas',
    detalles:{
        autor: 'cepillin',
        year: 1999,
    }
}
const{volumne, segundo, cancion, detalles} = reproductor;

/*console.log(`El volumne actual es: ${reproductor.volumne}`);
console.log(`El volumne actual es: ${reproductor.segundo}`); 
console.log(`El volumne actual es: ${reproductor.cancion}`);
console.log(`El volumne actual es: ${reproductor.detalles.autor}`);*/
console.log(`El volumne actual es: ${volumne}`);
console.log(`El seungo actual es: ${segundo}`);
console.log(`El cancion actual es: ${cancion}`);
//console.log(`El autor de la cancion es: ${autor}`);

const dbz:string[] = ['Goku', 'Vegeta', 'Yamcha',' Trunks'];
console.log('Personaje1: ', dbz[0]);
console.log('Personaje1: ', dbz[1]);
console.log('Personaje1: ', dbz[2]);
console.log('Personaje1: ', dbz[3]);

const[p1, p3, p4] = dbz;
console.log('personaje 1:' ,p1);
//console.log('personaje 1:' ,p2);
console.log('personaje 1:' ,p3);
console.log('personaje 1:' ,p4);


