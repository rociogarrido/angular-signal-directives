import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SignalsRoutingModule } from './signals-routing.module';

@NgModule({
  imports: [
    CommonModule, SignalsRoutingModule
  ],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignalsModule { }
