import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  template: `<p></p>Manual Binding<input type="text" (input)="onUserInput($event)" [value]="name"/>
  <!--Using Directives:<input type="text" [(ngModel)]="name"/>-->
    <p>hi</p>
  <p>you are great {{name}}<p>`
})
export class UserComponent {
  @Input() name ;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event){
    //this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
