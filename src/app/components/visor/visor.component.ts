import { Component, OnInit,DoCheck } from '@angular/core';
import {VisorControllerService} from '../../services/visor-controller.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component"
import {NewItemService} from '../../services/new-item.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ControllerService} from '../../services/controller.service';
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
    
    private _visorController:VisorControllerService,
    private _newItem:NewItemService,
    private _controller: ControllerService,
    public dialog: MatDialog){
    this.buildForm();
    this.newItemColor = "#ffffff";
    this.builder = _visorController.getBuilder();
    this.toggle = false;

   }
   ngOnInit(): void {
    
    this.mode = this._visorController.getVisorMode();
  }
    ngDoCheck(){
      this.mode = this._visorController.getVisorMode();
      this.builder = this._visorController.getBuilder();
      if(this._visorController.objectExists){
        
        this.loadVisorObject();
        this.empty = false;
           
      }else{
          this.globalObject = null;
          this.empty = true;
      }
  }
 
  loadVisorObject(){
    this.globalObject = this._visorController.getObject();
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
  acceptDelete(): void {
     const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {id: this.globalObject._id,name:this.globalObject.name_es}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteItem(this.globalObject._id);
      }
    });
  }
  
  deleteItem(id){
    console.log("Borrando : "+id);
    this._controller.deleteFromApi(id,this.mode).subscribe((res=>{
      console.log("res");
      this._controller.update();
    }));;
  }
  newItem(event : Event){
    event.preventDefault();
    let ingredientProp = this.ingredientPropertiesFormGroup.value;
    let ingredientColor = this.newItemColor;
    let name = this.nameFormGroup.value;
    let desc = this.descFormGroup.value;
    this._newItem.insertItem({name,desc,ingredientProp,ingredientColor},this.mode);
    this.cleanInputs(); 
  }

  cleanInputs(){
    this.ingredientPropertiesFormGroup.setValue({solid:false});
    this.nameFormGroup.setValue({name_es :"",name_en:""});
    this.descFormGroup.setValue({description_es :"",description_en:""});
    this.newItemColor = "#ffffff";
  
  }
}
