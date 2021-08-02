import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa.component';



@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PessoaComponent
  ]
})
export class PessoaModule { }
