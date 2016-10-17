import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{ title }}</h1>
  <div>
  	<label>name: </label>
 	<input placeholder="name">
  </div>
  <div>
  	<label>password:</label>
  	<input type="password" placeholder="password">
  </div>
  <div>
  	<button (click)="newUser(DoRegiste)">register</button>
  	<button (click)="jump(DoRegiste)">login</button>
  </div>
  <div *ngIf="DoRegiste">
  	<new-user></new-user>
  </div>
  `
})
export class AppComponent { 
	title = "First Test";
	public DoRegiste = false;
	newUser(DoRegiste): void{
		this.DoRegiste = true;
	}
	jump(DoRegiste): void{
		this.DoRegiste = false;
	}
}
