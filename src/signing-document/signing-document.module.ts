import { Module } from '@nestjs/common';
import { SigningDocumentService } from './signing-document.service';
import { SigningDocumentController } from './signing-document.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SigningDoc,
  SigningDocumentSchema,
} from './schemas/signing-document.schema';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SigningDoc.name,
        schema: SigningDocumentSchema,
      },
    ]),
    UsersModule,
  ],
  providers: [SigningDocumentService, User],
  controllers: [SigningDocumentController],
})
export class SigningDocumentModule {}
