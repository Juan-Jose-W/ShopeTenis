import mongoose, { Schema, Document } from 'mongoose';

export interface ITenis extends Document {
  nombre: string;
  categoria: string;
  precio: string[];
  descripcion: string;
  imagenUrl: string;
}

const TenisSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true },
  precio: { type: [String], required: true },
  descripcion: { type: String, required: true },
  imagenUrl: { type: String, required: true },
});

export default mongoose.model<ITenis>('Tenis', TenisSchema);