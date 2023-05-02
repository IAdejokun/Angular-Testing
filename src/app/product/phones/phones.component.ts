import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Products } from 'src/app/products';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {

  selectedProduct:any = {};

  products:Products[] = [];

  toggled:boolean = false;

  toToggle:any;

  loading:boolean = true;

  constructor(private dataService:DataService){}

  ngOnInit():void{
    this.getProduct()
  };

  getProduct(){
    this.dataService.getProducts().subscribe({
      next:(res)=>{
        this.products = res;
        console.log(this.products);
        this.loading = false;
        
       },
       error:(err)=>{
        console.log(err);
        this.loading = false;
       }
    })
  }

  toggleColor(id:any){
    // this.toggled = !this.toggled;
   
    // this.toToggle = id;

    this.selectedProduct = id;
  }
  


}
