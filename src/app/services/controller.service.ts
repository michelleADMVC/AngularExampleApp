import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private rootURL = "https://partibocs.herokuapp.com";
  private updateVar:boolean = false;
  constructor(private http:HttpClient) {
 
  }
  update(){
    this.updateVar=true;
  } 
  getUpdateVar(){
    return this.updateVar;
  }
  resetUpdateVar(){
    this.updateVar=false;
  }
  deleteFromApi(id,mode){
    let resourceURL = "/resources";
    return this.http.delete(this.rootURL+ resourceURL + 
    this.parseMode(mode)+"/"+id);
    
  }
  postToApi(item){
    let resourceURL = "/resources/ingredients";
    return this.http.post(this.rootURL+resourceURL,item);
  }
  getFromApi(mode){
    console.log(mode);
    let resourceURL = "/resources";
      return this.http.get(this.rootURL+resourceURL+ this.parseMode(mode));
  }
  parseMode(mode){
    let URL;
    switch(mode){
      case 'ingredient':
        URL = "/ingredients";
      break;
      case 'cocktail':
        URL = "/cocktails";
      break;
      case 'tool':
        URL = "/tools";
      break;
      case 'glass':
        URL = "/glasses";
      break;
      default : 
        URL = "/ingredients";
      break;
    }
    return URL;
  }
}
