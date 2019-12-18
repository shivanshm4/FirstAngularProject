import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestProject';
  rootName = 'Default Name';
  finalItems = ['Apple', 'Banana', 'Cherries'];

  rename(newName) {
    this.rootName = newName;
  }

  updateCart(newItem) {
     this.finalItems.push(newItem);
     console.log(this.finalItems);
  }
}
