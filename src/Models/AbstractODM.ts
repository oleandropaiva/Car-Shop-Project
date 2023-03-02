import { Model, Schema, models, model } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected collectionName: string;

  constructor(schema: Schema, collectionName: string) {
    this.schema = schema;
    this.collectionName = collectionName;
    this.model = models[collectionName] || model(collectionName, schema);
  }
}

export default AbstractODM;