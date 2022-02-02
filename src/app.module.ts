import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SigningDocumentModule } from './signing-document/signing-document.module';

const mongoURL = ''
@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      mongoURL,
    ),
    SigningDocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
