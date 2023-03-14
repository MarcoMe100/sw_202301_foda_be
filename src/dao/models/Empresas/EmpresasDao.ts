import { MongoDAOBase } from "@dao/MongoDAOBase";
import { IDBConnection } from "@server/dao/IDBConnection";
import { IEmpresa } from "./IEmpresas";

export class EmpresasDao extends MongoDAOBase<IEmpresa>{
  init() {
      throw new Error('Method not implemented.');
  }
  constructor(conexion: IDBConnection){
      super("empresas", conexion);
  }
}