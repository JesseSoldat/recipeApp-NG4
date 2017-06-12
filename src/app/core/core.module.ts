import { AuthGuard } from './../auth/auth-guard.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { RecipeService } from './../recipes/recipe.service';
import { AuthService } from './../auth/auth.service';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		HeaderComponent,
    HomeComponent
	],
	imports: [
		AppRoutingModule,
		SharedModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent
	],
	providers: [
		AuthService,
		RecipeService,
		ShoppingListService,
		AuthGuard
	]
})
export class CoreModule {}