import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onContinue(){
    localStorage.setItem('userName',this.userName);
    this.router.navigateByUrl('/books');
  }

}
