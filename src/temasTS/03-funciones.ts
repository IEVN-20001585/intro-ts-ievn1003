
function sumar(a: number, b:number): number {
    return a+b
}

const sumarFlecha= ( a: number, b: number) : number => a +b 
console.log(sumarFlecha(34, 56))

function multiplicar(n1:number, n2?:number, base:number=2):number{
    return n1*base

}
console.log(multiplicar,10)
console.log(multiplicar(5,undefined,10))
console.log(multiplicar)

interface Mascotas{
    nombre:string,
    edad:number,
    mostrarEdad:()=>void
}

function crearMascotas(mascotas:Mascotas,x:number):void{
    mascotas.edad+=x;
    console.log(mascotas);
    console.log(mascotas.mostrarEdad())
}

interface Mascota {
  nombre: string;
  edad: number;
  tipo: string;
  mostrarEdad(): string;
}

const mascota1: Mascota = {
  nombre: 'Luna',
  edad: 3,
  tipo: 'perro',
  mostrarEdad() {
    return `La edad de ${this.nombre} es ${this.edad} años`;
  }
}
crearMascotas(mascota1,2)