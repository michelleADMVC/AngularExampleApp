import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavigatorComponent,
    ItemListComponent,
    SearchComponent,
    VisorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    ControllerService,
    VisorControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
