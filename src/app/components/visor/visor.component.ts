import { Component, OnInit,DoCheck } from '@angular/core';
import {VisorControllerService} from '../../services/visor-controller.service';
@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit,DoCheck {
  public globalObject;
  public mode;
  public empty = true;
  public builder:boolean;
  constructor(private _controller:VisorControllerService) {
    this.builder = _controller.getBuilder();
   }
    ngDoCheck(){
      this.mode = this._controller.getVisorMode();
      this.builder = this._controller.getBuilder();
      if(this._controller.objectExists){
        this.loadVisorObject();
        this.empty = false;
        
      }else{
          this.globalObject = null;
          this.empty = true;
      }
  }

  ngOnInit(): void {
    this.mode = this._controller.getVisorMode();
    console.log(`modo : ${this.mode}`);
  }
  loadVisorObject(){
    this.globalObject = this._controller.getObject();
  }
}
