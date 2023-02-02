

export interface IEmpresas{
    codigo: string;
    nombre: string;
    status: string;
    created ?: Date;
    updated ?: Date;
    observacion ?: string;
}



export class Empresas {

    
 
 private empresas : IEmpresas[];
 constructor(){
    this.empresas= [];
 }

 getAll(){
    return this.empresas;
 }


 getById(codigo: string){
    const empresaToReturn = this.empresas.find((emp)=>{
        return emp.codigo === codigo;
    });
    return empresaToReturn;
 }


 add(nuevaEmpresa : IEmpresas){
    const date = new Date();
    const nueva: IEmpresas = {
        ...nuevaEmpresa,
    codigo: (Math.random()*1000).toString()+new Date().getTime().toString(),
    created: date,
    updated: date

    }
    this.empresas.push(nueva);
    return true;
 }

 update(updateEmpresas: IEmpresas){
    const newEmpresas: IEmpresas[] =this.empresas.map((emp)=>{
        if (emp.codigo === updateEmpresas.codigo) {
            return {...emp, ...updateEmpresas,update: new Date()};
        }
        return emp;
    });
    this.empresas = newEmpresas;
    return true;
 }
 delete(codigo: string){
    const empresaToDelete = this.empresas.find((emp)=>{
        return emp.codigo === codigo;
    });
    if(empresaToDelete){
        const newEmpresas: IEmpresas[] = this.empresas.filter((emp)=>{
         return emp.codigo !== codigo;
        });
        this.empresas =newEmpresas;
        return true;
    }
    return false;
 }
}