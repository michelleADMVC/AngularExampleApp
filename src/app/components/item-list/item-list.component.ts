import { Component, OnInit, DoCheck } from '@angular/core';
import {ControllerService} from '../../services/controller.service';
import {VisorControllerService} from '../../services/visor-controller.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit,DoCheck {
  public empty = true;
  public items;
  private mode;
  public builder:boolean;

  constructor(private _controller:ControllerService, private _visor:VisorControllerService) {
    this.items = [];
    this.builder = false;
    this.loadItems();
   }
  ngOnInit(): void {
    this.mode = this._visor.getMode();
   
  }
  ngDoCheck(){
    if(this.mode != this._visor.getMode()){
      this.mode = this._visor.getMode();
      this.cleanList();
      this.loadItems();
    }
  }
  cleanList(){
    this.empty = true;
    this.items = [];
  }
  setVisorObject(i){
   if(!this.builder){
    this._visor.setVisorMode(this.mode);
    this._visor.setObject(this.items[i]);
   }
  }
  getMode(){
    return this.mode;
  }
  setMode(mode){
    this.mode = mode;
  }
  loadItems(){
    this._controller.getFromApi(this.mode).subscribe((res=>{
      console.log(res);
      if (res[0].error != true) {
        this.items = (res[1]);
      }
      this.empty= false;
    }));
  }
  addItem(){
    this._visor.setVisorMode(this.mode);
    this._visor.switchBuilder();
    this._visor.cleanObject();
    this.builder =  this._visor.getBuilder();
  }
}
