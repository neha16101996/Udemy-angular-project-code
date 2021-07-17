import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { recipeModel } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() receipe:any = recipeModel;
  @Output() itemSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.itemSelected.emit();
  }

}
