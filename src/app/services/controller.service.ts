import { Injectable } from '@angular/core';
import {Ingredient_min} from '../models/Ingredient_min';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private rootURL = "https://partibocs.herokuapp.com/";
  constructor(private http:HttpClient) {

  }
  getFromApi(mode){
    let resourceURL = "resources";
    switch (mode) {
      case 'ingredient':
      resourceURL += "/ingredients";
      return this.http.get(this.rootURL+resourceURL);
    break;
    case 'cocktail':
        resourceURL += "/cocktails";
        return this.http.get(this.rootURL+resourceURL);
    break;
    case 'tool':
      resourceURL += "/tools";
      return this.http.get(this.rootURL+resourceURL);
    break;
    case 'glass':
      resourceURL += "/glasses";
      return this.http.get(this.rootURL+resourceURL);
    break;
    default:
      resourceURL += "/ingredients";
      return this.http.get(this.rootURL+resourceURL);
    break;
  }
     
  }
}
