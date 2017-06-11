import { RecipesRoutingModule } from './recipes-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';

@NgModule({
	declarations: [
		RecipesComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RecipesRoutingModule
	]
})

export class RecipesModule {}
