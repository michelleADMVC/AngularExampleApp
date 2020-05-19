import {NgModule} from "@angular/core";
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';  
@NgModule({
    imports:[
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatStepperModule,
        MatDialogModule,
        MatSlideToggleModule
    ],
    exports:[
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatStepperModule,
        MatDialogModule,
        MatSlideToggleModule
    ]
})
export class MaterialModule{

}