import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Request,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SigningDocumentService } from './signing-document.service';

export interface DocumentDto {
  Assigner: string;
  Owner: string;
  Status: string;
  DocName: string;
}
@Controller('signing-document')
export class SigningDocumentController {
  constructor(private readonly documentService: SigningDocumentService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  // @UseGuards(JwtAuthGuard)
  uploadFile(@UploadedFile() file: Express.Multer.File, @Request() req) {
    return this.documentService.createDoc(file.originalname, req.user.username);
  }

  @Get('')
  @UseGuards(JwtAuthGuard)
  getFile(@Request() req) {
    return this.documentService.getDoc(req.user.username);
  }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  updateDoc(@Param('id') id: string, @Body() document: DocumentDto) {
    return this.documentService.updateDoc(id, document);
  }
}
