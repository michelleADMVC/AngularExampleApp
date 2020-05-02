import { Component, OnInit } from '@angular/core';
import {ControllerService} from '../../services/controller.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public items;
  constructor(private _service:ControllerService) {
    this.items =[];
    this.items = _service.getIngredients();
    _service.getJson().subscribe((res=>{
      console.log(res);
      
    }));
    console.log(this.items);
   }
   action(){
     console.log("Click");
   }
  ngOnInit(): void {
  }


}
