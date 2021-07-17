import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWsSelected = new EventEmitter<recipeModel>();
  recipes: recipeModel[] = [
    new recipeModel('A test name', 'Test des',
     'https://comps.canstockphoto.com/recipes-3d-concept-stock-illustration_csp9417848.jpg'),
     new recipeModel('A test name', 'Test des',
     'https://comps.canstockphoto.com/recipes-3d-concept-stock-illustration_csp9417848.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: recipeModel) {
   this.recipeWsSelected.emit(recipe);
  }

}
