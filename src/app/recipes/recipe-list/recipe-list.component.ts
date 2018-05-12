import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
      new Recipe('Test Recipe', 'This is simply a test.', 'http://img.povar.ru/main/bb/f4/6e/19/sirniki_klassicheskii_recept-194902.JPG'),
      new Recipe('Test Recipe', 'This is simply a test.', 'https://images.lady.mail.ru/5309/'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
