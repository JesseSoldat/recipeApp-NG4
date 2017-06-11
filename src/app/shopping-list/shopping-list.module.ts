import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
	declarations: [
    ShoppingListComponent,  
  ],
  imports: [
  	CommonModule,
  	FormsModule
  ]
})
export class ShoppingListModule {}