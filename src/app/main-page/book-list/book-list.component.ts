import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookName: string;
  books;
  progressBar = false;
  mainBookDir = [];
  constructor(private router:Router,private activeroute: ActivatedRoute, private mainSer: MainService) {
    this.mainBookDir = [];
  }

  ngOnInit(): void {
    this.books=null;
    this.mainBookDir=[];
    this.activeroute.params.subscribe((res) => {
      console.log(res)
      this.bookName = res['bookName'];
      this.getData(this.bookName);
      // console.log(this.bookName)
    });

  }

  getData(bookName) {
    this.books=null;
    this.mainBookDir=[];
    this.progressBar = true;
    this.mainSer.getURLData(bookName).subscribe(res => {
      this.books = this.mainSer.getMainData(res);
      if (this.books.length == 0) {
        this.router.navigateByUrl('/books')
      } else {
        console.log(this.mainBookDir)
        this.mainBookDir=null;
        this.mainBookDir = this.books;
        this.progressBar = false;
        console.log(this.mainBookDir)
      }
    });
  }

}
