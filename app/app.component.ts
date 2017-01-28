import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul class="nav navbar-nav">
  <li><a routerLink ="/">Home</a></li>
  <li><a routerLink ="/about">About</a></li>
  <li><a routerLink="/contact">Contact</a></li>
  </ul>
  <hr/>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
  
 }


