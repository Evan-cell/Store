import { Component, OnInit } from '@angular/core';
import { CartService } from './../../service/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product : any = [];
  public grandTotal !: number;
  constructor(private CartService : CartService) { }
  ngOnInit(): void {
    this.CartService.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.CartService.getTotalprice();
    })
  }
  removeItem(item:any){
    this.CartService.removeCartItem(item)
  }
  }


