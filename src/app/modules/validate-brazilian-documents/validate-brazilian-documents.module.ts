import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateBrazilianDocumentsComponent } from './validate-brazilian-documents.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule , Http} from '@angular/http';
import { DocumentValidationService } from './service/document-validation.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
  	ValidateBrazilianDocumentsComponent
  ],
  exports: [
    ValidateBrazilianDocumentsComponent
  ],
  

  providers: [DocumentValidationService]
})
export class ValidateBrazilianDocumentsModule { }
