import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  searchValue: string;
  searchTool=true;
  cartSize: number;
  // @Output() bookName: EventEmitter<string> = new EventEmitter<string>();
  constructor(private share:ShareService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.cartSize=this.share.cartDir.length;
  }

}
