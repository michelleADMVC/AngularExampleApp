import { Component, OnInit } from '@angular/core';
import { VisorControllerService } from '../../services/visor-controller.service';
@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  public mode:String;
  constructor(private _controller:VisorControllerService) {
     
    
    _controller.setMode(this.mode);
  }
  changeMode(mode){
    this.mode = mode;
    this._controller.setMode(mode);
  }
  ngOnInit(): void {
    this.mode = "ingredient";
    this._controller.setMode(this.mode);
  }

}
