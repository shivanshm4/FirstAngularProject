import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() items = [];
  @Output() itemAddEvent = new EventEmitter<string>();
  newItem = '';

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.itemAddEvent.emit(this.newItem);
  }

}
