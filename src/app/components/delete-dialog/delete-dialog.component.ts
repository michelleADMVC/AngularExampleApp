import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  id:String;
  name:String;
}
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ){
      console.log(`Datos desde modal : ${data.id}`);
      console.log(`Datos desde modal : ${data.name}`);
    }

  aceptar(): void {
    this.dialogRef.close(true);
  }
  cancelar(): void {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
  }

}
