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
}