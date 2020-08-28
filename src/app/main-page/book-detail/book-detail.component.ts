import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Title } from '@angular/platform-browser';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookId;
  bookDetail: any;
  price: any;
  constructor(private router: ActivatedRoute, private mainSer: MainService ,private snackBar:MatSnackBar,private shareSer:ShareService) { }

  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.bookId = res.id;
      this.getData(this.bookId);
    });
  }

  getData(bookId) {
    this.mainSer.getURLData(bookId).subscribe((res) => {
      this.bookDetail = this.mainSer.getMainData2(res);
      if (this.bookDetail.saleInfo.saleability == 'FOR_SALE') {
        this.price = this.bookDetail.saleInfo.listPrice.currencyCode + " " + this.bookDetail.saleInfo.listPrice.amount;
      } else {
        this.price = 'Not Available';
      }
    });
  }

  openSnack(){
    const title=this.bookDetail.volumeInfo.title;
    if(this.price=='Not Available'){
      this.snackBar.open('Price is not available & not added to cart','',{
        duration:2000,
        verticalPosition:'top',
        panelClass:'panel'
      });
    }else{
    this.shareSer.pushToCartDir({id:this.bookDetail.id,title:title,price:this.price,image:this.bookDetail.volumeInfo.imageLinks.thumbnail});
      this.snackBar.open(title+' is added to cart','',{
        duration:2000,
        verticalPosition:'top'
      });
    }
  }

}
