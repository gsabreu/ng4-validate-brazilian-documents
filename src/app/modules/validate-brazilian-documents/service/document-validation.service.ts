import { FormControl }   from '@angular/forms';
import { Injectable } from '@angular/core';


export class DocumentValidationService {

@Injectable()
	static cnpjValidator(control){
		try{
			let control2 = Object.assign(new FormControl(), control);
			let cnpj = control2.value;
			if (cnpj == '' || cnpj.length != 14)
				return { 'invalidCnpj': true };

			// Valida DVs
			let size = cnpj.length - 2
			let numbers = cnpj.substring(0, size);
			let digit = cnpj.substring(size);
			let sum = 0;
			let pos = size - 7;
			for (let i = size; i >= 1; i--) {
				sum += numbers.charAt(size - i) * pos--;
				if (pos < 2)
					pos = 9;
			}
			let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
			if (result != digit.charAt(0))
				return { 'invalidCnpj': true };

			size = size + 1;
			numbers = cnpj.substring(0, size);
			sum = 0;
			pos = size - 7;
			for (let i = size; i >= 1; i--) {
				sum += numbers.charAt(size - i) * pos--;
				if (pos < 2)
					pos = 9;
			}
			result = sum % 11 < 2 ? 0 : 11 - sum % 11;
			if (result != digit.charAt(1))
				return { 'invalidCnpj': true };

			return null;
		}catch(e){}
	}

	static cpfValidator(control){
		try{
			let control2 = Object.assign(new FormControl(), control);
			let strCPF = control2.value;

			if (!strCPF) {
				return null;
			}

			let sum;
			let rest;
			sum = 0;   
			if (strCPF == "00000000000")
				return { 'invalidCpf': true };
			for (let i=1; i<=9; i++)
				sum = sum + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
			rest = (sum * 10) % 11;
			if ((rest == 10) || (rest == 11)) 
				rest = 0;
			if (rest != parseInt(strCPF.substring(9, 10)) )
				return { 'invalidCpf': true };
			sum = 0;
			for (let i = 1; i <= 10; i++)
				sum = sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);
			rest = (sum * 10) % 11;
			if ((rest == 10) || (rest == 11)) 
				rest = 0;
			if (rest != parseInt(strCPF.substring(10, 11) ) )
				return { 'invalidCpf': true };
			return null;
		}catch(e){}
	}
}