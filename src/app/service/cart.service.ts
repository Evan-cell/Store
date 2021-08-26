import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList : any =[]
public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProduct()
  {
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this,this.cartItemList.psuh(product)
    this.productList.next(this.cartItemList)
    this.getTotalprice();
  }
  getTotalprice()
  {
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
  }
  removeCartItem(product : any){
    this.cartItemList.map((a:any, index: any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }
}
