import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDir=[];
  cartEmpty: boolean=true;
  cartShow:boolean=false
  constructor(private shareSer:ShareService) { }

  ngOnInit(): void {
    this.cartDir=this.shareSer.getCartData();
    if(this.cartDir.length==0){
      this.cartEmpty=true;
      this.cartShow=false;
    }else{
      this.cartEmpty=false;
      this.cartShow=true;
    }
  }

  toDelete(id){
    this.shareSer.toDeleteinCart(id);
    this.ngOnInit();
  }

}
