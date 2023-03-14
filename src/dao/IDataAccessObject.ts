export interface IDataAccessObject{
    findAll: Function;
    findByID: Function;
    create: Function;
    update: Function;
    delete: Function;
    findByFilter: Function;
    findOneFilter: Function;
    aggregate: Function;
    getConnection: Function;
    rawUpdate: Function;
}