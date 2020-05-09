import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisorControllerService {
  private object;
  public objectExists:boolean;
  private globalMode;
  private visorMode;
  private builder:boolean;

  constructor() { 
    this.objectExists = false;
    this.builder = false;
  }
  public objectValidator(){
    if (this.object) {
      this.objectExists = true;
    }else{
      this.objectExists = false;
    }
  }
  public switchBuilder(){
    if(!this.builder){
      this.builder = true;
    }else{
      this.builder = false;
    }
  }
  public cleanObject(){
    this.object = null;
    this.objectValidator();
  }
  public getBuilder(){
    return this.builder;
  }
  public setMode(mode){
    this.globalMode = mode;
  }
  public getMode(){
    return this.globalMode;
  }
  public getVisorMode(){
    return this.visorMode;
  }
  public setVisorMode(mode){
    this.visorMode = mode;
  }
  public setObject(object){
    this.object = object;
    this.objectValidator();

  }
  public getObject(){
    return this.object
  }
  
}
