import { Component, OnInit,DoCheck } from '@angular/core';
import {VisorControllerService} from '../../services/visor-controller.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component"
import {NewItemService} from '../../services/new-item.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// 
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
  public toggle:boolean;

  public nameFormGroup:FormGroup;  
  public ingredientPropertiesFormGroup:FormGroup;
  public descFormGroup : FormGroup;
  public newItemColor;


  constructor(
    private _controller:VisorControllerService,
    private _newItem:NewItemService,
    public dialog: MatDialog){
    this.buildForm();
    this.newItemColor = "#ffffff";
    this.builder = _controller.getBuilder();
    this.toggle = false;
  
   }
   buildForm(){
    this.nameFormGroup = new FormGroup({          
      'name_es':new FormControl(''), //note, can have up to 3 Constructor Params: default value, validators, AsyncValidators
      'name_en':new FormControl('')
    })
    this.ingredientPropertiesFormGroup = new FormGroup({
      'solid':new FormControl(''),
    })
    this.descFormGroup = new FormGroup({
      'description_es': new FormControl(''),
      'description_en': new FormControl(''),
    })
   }
   ngOnInit(): void {
    
    this.mode = this._controller.getVisorMode();
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
  deleteItem(id){
    console.log("Borrando : "+id);
  }
  acceptDelete(): void {
     const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {id: this.globalObject._id,name:this.globalObject.name_es}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  
  loadVisorObject(){
    this.globalObject = this._controller.getObject();
  }
  newItem(event : Event){
    event.preventDefault();
    
    console.log(this.nameFormGroup.value);
    console.log(this.descFormGroup.value);
    this._newItem.insertItem();
    this.cleanInputs(); 
  }

  cleanInputs(){
    this.newItemColor = "#ffffff";
  
  }
}
