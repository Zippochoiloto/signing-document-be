import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SigningDocument = SigningDoc & Document;

@Schema()
export class SigningDoc {
  @Prop({ required: true })
  DocName: string;

  @Prop({ required: true })
  Status: string;

  @Prop({ required: false })
  Owner: string;

  @Prop({ required: false })
  Assigner: string;
}

export const SigningDocumentSchema = SchemaFactory.createForClass(SigningDoc);
