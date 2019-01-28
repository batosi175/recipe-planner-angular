import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('creme bruele',
    'this is a test description',
    'https://picsum.photos/500/500/?random'),
    new Recipe('tart pudding',
    'this is a test description',
    'https://picsum.photos/g/500/500/?random')
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
