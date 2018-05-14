import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../shared/user';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
