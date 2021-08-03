import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro-component';
import { MeuQuartoComponent } from './meu-primeiro/meu-quarto-component';
import { MeuSegundoComponent } from './meu-primeiro/meu-segundo-component';
import { MeuTerceiroComponent } from './meu-primeiro/meu-terceiro-component';
import { PessoaModule } from './pessoa/pessoa.module';
import { CarroModule } from './carro/carro.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
    MeuTerceiroComponent,
    MeuQuartoComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    PessoaModule,
    CarroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
