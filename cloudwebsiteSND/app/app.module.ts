import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent }   from './app.component';
import { UserRegisterComponent } from './user-register.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule
   ],
  declarations: [ 
  	AppComponent,
  	UserRegisterComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
