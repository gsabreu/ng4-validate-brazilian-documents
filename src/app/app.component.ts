import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ValidateBrazilianDocumentsComponent } from './modules/validate-brazilian-documents/validate-brazilian-documents.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'app';

  public formCnpj: FormGroup;
  public formCpf: FormGroup;

  public cnpj: String;
  public cpf: String;

  constructor(private validateBrazilianDocumentsComponent: ValidateBrazilianDocumentsComponent) {
  	this.formCnpj = validateBrazilianDocumentsComponent.validateCnpj(this.cnpj);
  	this.formCpf = validateBrazilianDocumentsComponent.validateCpf(this.cpf)
   }

  ngOnInit() {
  }

}
