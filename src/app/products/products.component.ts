import { Component, computed, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products:WritableSignal<Product[]>=signal<Product[]> ([]);

  selectedProduct:Signal<number> = computed(()=> {
    return this.products().filter(p => p.selected).length;
  });
  total:Signal<number>  = computed(()=>{
    return this.products()
    .filter(p=> p.selected)
    .reduce((sum,current :Product)=>sum + current.price,0 )
  });
  constructor(){}

  ngOnInit(): void {
    this.products.set(
      [
        {id:1, name:'Ecran Smart TV 32" ', price:60000,selected:false},
        {id:2, name:'Tecno Camon 20 64GO" ', price:80000,selected:true},
        {id:3,name:'Laptop Dell Latitude',price:70000,selected:false}
      ]
    );

  }
 






  select(product:Product) {
     this.products.update(
      (products:Product[]) => products
      .map(
        p => p.id === product.id
        ?{...product,selected:!product.selected}:p
      ));
  }
}
