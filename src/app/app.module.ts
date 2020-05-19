import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
//Services __________
import {ControllerService} from './services/controller.service';
import {VisorControllerService} from './services/visor-controller.service';
//Components_________
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { SearchComponent } from './components/search/search.component';
//Module

import {MaterialModule} from './material.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { VisorComponent } from './components/visor/visor.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { ColorPickerModule } from 'ngx-color-picker'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavigatorComponent,
    ItemListComponent,
    SearchComponent,
    VisorComponent,
    DeleteDialogComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ColorPickerModule,
  
  ],
  providers: [
    ControllerService,
    VisorControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
