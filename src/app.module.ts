import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SigningDocumentModule } from './signing-document/signing-document.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://theanh:theanh@cluster0.6zqy2.mongodb.net/signing-document?retryWrites=true&w=majority',
    ),
    SigningDocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
