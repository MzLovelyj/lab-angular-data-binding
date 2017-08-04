import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { MyFoodsComponent } from './my-foods/my-foods.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    MyFoodsComponent,
    NewFoodComponent,
    FilterPipe  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
