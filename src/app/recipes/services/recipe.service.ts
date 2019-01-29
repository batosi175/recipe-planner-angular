import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('creme bruele',
      'this is a test description',
      'https://picsum.photos/500/500/?random',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 12),
      ],
    ),
    new Recipe('tart pudding',
      'this is a test description',
      'https://picsum.photos/g/500/500/?random',
      [
        new Ingredient('Bun', 2),
        new Ingredient('Meat', 1),
      ],
    ),
  ];
  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
