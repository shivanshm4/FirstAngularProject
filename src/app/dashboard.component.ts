import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',


})
export class DashboardComponent{
  loadState = 'Loading...';

  onClickStateChange(event){
    this.loadState = 'Finished';
  }
}
