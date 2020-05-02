import { Injectable } from '@angular/core';
import {Ingredient_min} from '../models/Ingredient_min';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private ingredients:Array<Ingredient_min>;
  private resourcesURL = "https://partibocs.herokuapp.com/resources/cocktails";
  constructor(private http:HttpClient) {

    this.ingredients = [];
    console.log("Controlador de servicios iniciado");
    this.test();
   }
   test(){
      console.log("Test ingredient with min iniciated");
      for (let i = 0; i < 100; i++) {
        let newIngredient = new Ingredient_min("Hielo "+i,"Es hielo man, sta frio uwu");
        this.ingredients.push(newIngredient); 
      }
    }
   getIngredients(){
     return this.ingredients;
   }
   getJson(){
     return this.http.get(this.resourcesURL);
   }
}
