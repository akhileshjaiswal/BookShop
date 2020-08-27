import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [MainService]
})
export class MainPageComponent implements OnInit {
  books;
  noContent = true;
  bookContent = false;
  progressBar = false;
  mainBookDir = [];
  bookName: String;
  constructor(private mainSer: MainService) { }

  ngOnInit(): void {
  }

  // onSearch(bookName) {

  //   this.progressBar = true;
  //   this.mainSer.getURLData(bookName).subscribe(res => {
  //     console.log(res);
  //     this.books = this.mainSer.getMainData(res);
  //     // console.log(this.books)
  //     if (this.books.length == 0) {
  //       this.noContent = true;
  //       this.bookContent = false;
  //       this.progressBar=false;
  //     } else {
  //       this.mainBookDir=this.books;
  //       this.noContent = false;
  //       this.bookContent = true;
  //       this.progressBar=false;
  //     }
  //   });
  // }

}
