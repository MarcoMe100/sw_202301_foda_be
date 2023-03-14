import {Db, Collection, Document, ObjectId, Filter,WithId, OptionalUnlessRequiredId} from 'mongodb';

import { IDataAccessObject } from "./IDataAccessObject";

export abstract class MongoDAOBase <T> implements IDataAccessObject{
public persistenceName: string;
private connection: Db;
private collection: Collection<T>;
public constructor(entityName:string, connection:Db){
    this.persistenceName =entityName;
    this.connection =connection;
    this.collection = this.connection.collection(this.persistenceName);
}

    findAll(){
       return this.collection.find({}).toArray();
    }
    findByID(id:string){
        const _id =  new ObjectId(id) as Filter<T>;
        return this.collection.findOne(_id);
    }
    create(newEntity: Partial<T>){
      return this.collection.insertOne(newEntity as OptionalUnlessRequiredId<T>);
    };
    update(id:string ,updateEntity: Partial<T>){
     const _id =new ObjectId(id) as Filter<T>;
     const updateObj = {"$set": updateEntity};
     return this.collection.updateOne({_id}, updateObj);
    }
    delete(id:string){
        const _id = new ObjectId(id) as Filter<T>;
        return this.collection.deleteOne({_id});
        return this.collection.deleteOne({_id});
    };
    findByFilter: Function;
    findOneFilter: Function;
    aggregate: Function;
    getConnection(){
        return this.connection;
    }
    rawUpdate: Function;
    
}