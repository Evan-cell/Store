import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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

}
