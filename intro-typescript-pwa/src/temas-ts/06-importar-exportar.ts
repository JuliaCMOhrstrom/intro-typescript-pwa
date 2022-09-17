//desestructuración de objetos
import { calcularIva2, Producto } from "./05-desestructuracion-funciones";
const tiendaProductos:Producto[] = [
    {
    desc:'Telefono1',
    precio: 15000,
    },
    {
    desc:'Tablet2',
    precio: 18700,
    },
    {
        desc:'Telefono2',
        precio: 19741,
    },
];
const [total1,iva1] = calcularIva2(tiendaProductos);
console.log(`Total: ${total1} \n IVA ${iva1}`)