export interface Iusuarios{
    codigo: string;
    correo: string;
    nombre: string;
    password : string;
    roles ?: boolean;
    creado ?: Date;
    ultimoAcceso ?: Date;
}


export class Usuarios {
 
 private usuarios : Iusuarios[];
 constructor(){
    this.usuarios= [];
 }

 getAll(){
    return this.usuarios;
 }


 getById(codigo: string){
    const usuarioToReturn = this.usuarios.find((emp)=>{
        return emp.codigo === codigo;
    });
    return usuarioToReturn;
 }

 add(NuevaUsuario : Iusuarios){
    const date = new Date();
    const nueva: Iusuarios = {
        ...NuevaUsuario,
    codigo: (Math.random()*1000).toString()+new Date().getTime().toString(),
    creado: date,
    ultimoAcceso: date

    }
    this.usuarios.push(nueva);
    return true;
 }

 update(updateUsuarios: Iusuarios){
    let updated = false;
    const newUsuarios: Iusuarios[] =this.usuarios.map((emp)=>{
        if (emp.codigo === updateUsuarios.codigo) {
            updated = true;
            return {...emp, ...updateUsuarios,update: new Date()};
        }
        return emp;
    });
    this.usuarios = newUsuarios;
    return updated;
 }
 delete(codigo: string){
    const usuarioToDelete = this.usuarios.find((emp)=>{
        return emp.codigo === codigo;
    });
    if(usuarioToDelete){
        const newUsuarios: Iusuarios[] = this.usuarios.filter((emp)=>{
         return emp.codigo !== codigo;
        });
        this.usuarios =newUsuarios;
        return true;
    }
    return false;
 }
}