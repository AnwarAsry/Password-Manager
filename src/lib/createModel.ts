import { Model, model, Schema } from "mongoose";

// Simple Generic Function for reusability
export default function createModel<T, TModel = Model<T>>(
  modelName: string,
  schema: Schema<T>
): TModel {
  let createdModel: TModel;
  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    // @ts-expect-error: eslint
    if (!global[modelName]) {
      createdModel = model<T, TModel>(modelName, schema);
      // @ts-expect-error: eslint forcing me
      // Error
      global[modelName] = createdModel;
    }
    // @ts-expect-error: eslint forcing me
    createdModel = global[modelName];
  } else {
    // In production mode, it's best to not use a global variable.
    createdModel = model<T, TModel>(modelName, schema);
  }
  return createdModel;
}
