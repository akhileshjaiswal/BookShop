import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BookDetailComponent } from './main-page/book-detail/book-detail.component';
import { BookListComponent } from './main-page/book-list/book-list.component';
import { NoBooksComponent } from './main-page/no-books/no-books.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'cart',component:CartComponent},
  {path:'cart/:bookName',redirectTo:'books/:bookName'},
  {path:'books',component:MainPageComponent,children:[
    {path:'',component:NoBooksComponent,pathMatch:'full'},
    {path:':bookName',component:BookListComponent},
    {path:':bookName/:id',component:BookDetailComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
