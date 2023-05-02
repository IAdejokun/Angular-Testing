import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { PhonesComponent } from './phones/phones.component';
import { AirpodsComponent } from './airpods/airpods.component';

const routes : Routes = [
  {
    path:'',
    component:ProductComponent,
    children:[
      {
        path:'phones',
        component: PhonesComponent
      },
      {
        path: 'airpods',
        component: AirpodsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
