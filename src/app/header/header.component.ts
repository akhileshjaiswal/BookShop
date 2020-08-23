import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user_name: string;
  search_value: string;
  @Output() book_name: EventEmitter<string> = new EventEmitter<string>();
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res) => {
      this.user_name = res.user_name;
    });
  }

  onSearch() {
    this.book_name.emit(this.search_value);
  }

}
