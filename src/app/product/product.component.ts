import { Component ,signal,computed, Signal, WritableSignal, effect} from '@angular/core';

@Component({


  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // variables
  price: number = 5000 ;
  quantity : WritableSignal<number> = signal<number> (1);
  total :Signal<number>= computed(()=>( this.price * this.quantity()));

  constructor(){
    effect(()=>{
      console.log('quantity :' + this.quantity())
      console.log('total:'+this.total())
    })
   }

  // methods to decrement the quantity
decrement() {
  this.quantity.set(this.quantity() - 1);
}

  increment() {
    this.quantity.set(this.quantity() + 1);
  }

}
