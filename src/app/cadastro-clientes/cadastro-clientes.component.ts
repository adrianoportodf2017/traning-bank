import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
 formCadastro;
  valoresForm: string;
  conversao: string;

 constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });

  console.log(this.formCadastro.controls);
  this.formCadastro.valueChanges.pipe(
    debounceTime(1000))
    .subsctript(res=> {
      console.log(res);
      this.valoresForm=res;

    });

}
cadastro(){
  this.conversao = JSON.stringify(this.valoresForm);
  localStorage.setItem('cadastro', this.conversao);
 }

}
