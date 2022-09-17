type AlumnoUTL = {
    nombre: string,
    edad: number,
    direccion: Direccion, 
    mostrarDireccion: () => void
  }
  
  
  const alumnoUTL: AlumnoUTL = {
   nombre: 'Julia',
   edad: 20,
    direccion: {
    calle: 'Bolivia 612',
    pais: 'MX',
    estado: 'Gto'
   },
   mostrarDireccion(){
    return `${this.nombre}, ${this.direccion.estado}, ${this.direccion.pais}`
   }
  }
  
  console.log(alumnoUTL.mostrarDireccion());
  