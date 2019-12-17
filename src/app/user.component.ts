import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p></p>/*Manual Binding<input type="text" (input)="onUserInput($event)" [value]="name"/>*/
  Using Directives:<input type="text" [(ngModel)]="name"/>
    <p>hi</p>
  <p>you are great {{name}}<p>`
})
export class UserComponent {
  name = 'Shivansh Mishra';

  onUserInput(event){
    this.name = event.target.value;
  }
}
