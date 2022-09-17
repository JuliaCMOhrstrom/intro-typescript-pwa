export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto = {
    desc: 'Noki',
    precio: 2654
}
const tablet:Producto = {
    desc: 'iPad',
    precio: 25400,
}
function calcularIva(producto:Producto[]):number{
    let total= 0;
    producto.forEach((producto) =>{
        total+= producto.precio;
    })
    return total*0.16;
}

const  articulos1 = [telefono,tablet];
const IVATot = calcularIva(articulos1);
console.log(`IVA: ${IVATot}`);

export function calcularIva2(producto:Producto[]):[number,number]{
    let total = 0;
    producto.forEach(({precio})=> {
        total+= precio;
    })
    return[total, total*0.16];
}
const articulos2 = [telefono, tablet];
const [total,iva] = calcularIva2(articulos2);

console.log(`Total: ${total} \n IVA: ${iva}`);