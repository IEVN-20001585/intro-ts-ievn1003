
interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles

}
interface Detalles{ 
    autor:string,
    anio:number
}
const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'Mess',
    detalles:{
        autor:'Ed Sheeran',
        anio:2015
    }
}
console.log('El volumen actual es de:', reproductor.volumen);
console.log('El volumen actual es de', reproductor.segundo);
console.log('La cancion actual es de', reproductor.cancion);
console.log('El autor es', reproductor.detalles.autor);
console.log('El año es',reproductor.detalles.anio);
//desestructuracion de objetos
const {volumen,segundo,cancion,detalles}=reproductor
const{autor,anio}=detalles
console.log('El volumen actual es de:', volumen);
console.log('El volumen actual es de',segundo);
console.log('La cancion actual es de', cancion);
console.log('El autor es', autor);
console.log('El año es',anio);

//desestructuracion de arreglos
const dbz:string[]=['Goku','Vegeta','Trunks']
console.log('Personajes 1:',dbz[0]);
console.log('Personajes 2:',dbz[1]);
console.log('Personajes 3:',dbz[2]);
//Desestructuracion de arreglos
const [p1,p2,p3]=dbz
console.log('Personajes 1:',p1);
console.log('Personajes 2:',p2);
console.log('Personajes 3:',p3);