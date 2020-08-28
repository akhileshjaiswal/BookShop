import { Injectable } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Injectable()
export class ShareService {
    cartDir=[];
    pushToCartDir(data){
        this.cartDir.push(data);
    }

    getCartData(){
        return this.cartDir;
    }

    toDeleteinCart(id){
        for(let i=0;i<this.cartDir.length;i++){
            if(this.cartDir[i].id==id){
                this.cartDir.splice(i,1);
            }
        }
    }

    getTotalAmount(){
        let amount=0;
        var code;
        for(let i=0;i<this.cartDir.length;i++){
            var arr=this.cartDir[i].price.split(' ');
            code=arr[0];
            amount=amount+parseInt(arr[1]);
        }
        return code+" "+amount;
    }
}