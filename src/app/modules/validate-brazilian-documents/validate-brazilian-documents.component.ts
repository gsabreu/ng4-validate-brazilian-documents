import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

import { DocumentValidationService } from './service/document-validation.service';

@Component({
  selector: 'app-validate-brazilian-documents',
  templateUrl: './validate-brazilian-documents.component.html'
})


export class ValidateBrazilianDocumentsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private documentValidationService: DocumentValidationService) { }

  ngOnInit() {
  }

  public validateCpf(cpf: String) : FormGroup {
  	let formCpf: FormGroup = this.formBuilder.group({ 'cpf': new FormControl(cpf, this.documentValidationService.cpfValidator) });
    console.log(formCpf);
    
    return formCpf 
  }


  public validateCnpj(cnpj: String) : FormGroup {
  	let formCnpj: FormGroup;
  	return formCnpj = this.formBuilder.group({ 'cnpj': new FormControl(cnpj, this.documentValidationService.cnpjValidator) });
  }

}
