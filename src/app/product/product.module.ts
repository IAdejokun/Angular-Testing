import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesComponent } from './phones/phones.component';
import { AirpodsComponent } from './airpods/airpods.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';



@NgModule({
  declarations: [
    ProductComponent,
    PhonesComponent,
    AirpodsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
