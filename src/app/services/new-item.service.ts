import { Injectable } from '@angular/core';
import {ControllerService} from '../services/controller.service';

@Injectable({
  providedIn: 'root'
})
export class NewItemService {

  constructor(private _controller:ControllerService) {
    console.log("Servicio de item builder iniciado");
    
  }

  insertItem(item,mode){
    switch(mode){
      case "ingredient": 
      this._controller.postToApi(this.makeIngredient(item)).subscribe((res=>{
        console.log(res);
        this._controller.update();
      }));
      break;
    }
  }

  makeIngredient(item){
    let type; 
    console.log(item.ingredientProp);
    if (item.ingredientProp.solid == true){
      type = "solid";
    }else{
      type = "liquid";
    }
    let ingredient = {
      name_es :item.name.name_es,
      name_en :item.name.name_en,
      color : item.ingredientColor,
      type : type,
      description_en:item.desc.description_en,
      description_es:item.desc.description_es,
      model: "RandomModel",
      view_model: "RandomViewModel"
    };
    console.log(ingredient);
    return ingredient;
  }
}
