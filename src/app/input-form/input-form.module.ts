import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputFormPageRoutingModule } from './input-form-routing.module';
import { InputFormPage } from './input-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InputFormPageRoutingModule
  ],
  declarations: [InputFormPage],
  exports:[InputFormPage],
})
export class InputFormPageModule {}
