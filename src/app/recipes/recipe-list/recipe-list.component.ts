import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('creme bruele',
    'this is a test description',
    'https://picsum.photos/500/500/?random'),
    new Recipe('tart pudding',
    'this is a test description',
    'https://picsum.photos/g/500/500/?random')
  ];

  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // if (this.recipes.length > 0) {
    //   this.selectedRecipe.emit(this.recipes[0]);
    // }
  }

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
