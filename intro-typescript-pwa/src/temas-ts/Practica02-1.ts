//Pide 2 numeros, en donde 
//2 metodos privaddo y publico
// 2 Archivos
// 2 números (base) a*b

export class Suma{
    private base:number;
    private multi:number;

    setNumeros(base: number, multi:number){
        this.base = base
        this.multi = multi
    }
    private sumar():number{
        let total = 0
        for(let i = 1; i <= this.multi; i++){
            total += this.base
        }
        return total
    }
    getValor(): void{
        console.log(this.sumar());
    }
}