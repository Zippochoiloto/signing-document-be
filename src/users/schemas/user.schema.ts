import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({required: true})
    Email: string;

    @Prop({required: true})
    Password: string;

    @Prop({required: true})
    Type: string;

}

export const UserSchema = SchemaFactory.createForClass(User);