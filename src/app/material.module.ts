import {NgModule} from "@angular/core";
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon'; 
@NgModule({
    imports:[
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule
    ],
    exports:[
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule
    ]
})
export class MaterialModule{

}