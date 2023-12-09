import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { FormularioClientesComponent } from './clientes/formulario-clientes/formulario-clientes.component';



@NgModule({
  declarations: [
    ClientesComponent,
    FormularioClientesComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
