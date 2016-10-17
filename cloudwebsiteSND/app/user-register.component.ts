import { Component, Input } from '@angular/core';

@Component({
  selector: 'new-user',
  template:`
  <div>
	  <div>
	  	<label>mail:</label>
	  	<input type=email placeholder="email">
	  </div>
	  <div>
	    <label>password:</label>
	    <input type=password placeholder="passsword">
	  </div>
	  <div>
	  	<button>register</button>
	  </div>
  </div>
  `
})
export class UserRegisterComponent {
}
