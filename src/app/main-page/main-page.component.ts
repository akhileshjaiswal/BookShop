import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [MainService]
})
export class MainPageComponent implements OnInit {

  user_name: string;
  books;
  no_content = true;
  book_content = false;
  progress_bar = false;
  main_book_dir = [];
  constructor(private http: HttpClient, private mainser: MainService) { }

  ngOnInit(): void {
  }

  onSearch(book_name) {
    this.progress_bar = true;
    this.mainser.getURLData(book_name).subscribe(res => {
      this.books = this.mainser.getMainData(res);
      console.log(this.books)
      if (this.books.length == 0) {
        this.no_content = true;
        this.book_content = false;
        this.progress_bar=false;
      } else {
        this.main_book_dir=this.books;
        this.no_content = false;
        this.book_content = true;
        this.progress_bar=false;
      }
    });
  }

}
