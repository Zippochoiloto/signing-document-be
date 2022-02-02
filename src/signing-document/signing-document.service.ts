import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { SigningDoc, SigningDocument } from './schemas/signing-document.schema';
import { DocumentDto } from './signing-document.controller';

interface CreateSigningDocument {
  DocName: string;
  Status: string;
  Owner: string;
  Assigner: string;
}

@Injectable()
export class SigningDocumentService {
  constructor(
    @InjectModel(SigningDoc.name)
    private SigningDocModel: Model<SigningDocument>,
    private userService: UsersService,
  ) {}

  async createDoc(fileName: string, owner: string) {
    const newDoc: CreateSigningDocument = {
      DocName: fileName,
      Status: 'Pending',
      Owner: owner,
      Assigner: 'approver@gmail.com',
    };
    const result = this.SigningDocModel.create(newDoc);
    return result;
  }

  async getDoc(userEmail: string) {
    const user = await this.userService.getUserByName(userEmail);
    if (user.Type === 'requester') {
      const result = await this.SigningDocModel.find({
        Owner: userEmail,
      });
      return result;
    }
    if (user.Type === 'assigner') {
      const result = await this.SigningDocModel.find({
        Assigner: userEmail,
      });
      return result;
    }
    return;
  }

  async updateDoc(id: string, document: DocumentDto) {
    const newDoc = await this.SigningDocModel.findByIdAndUpdate(id, document);
    return newDoc;
  }
}
