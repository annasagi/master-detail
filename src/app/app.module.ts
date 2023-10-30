import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { DeviceTableComponent } from './device-table/device-table.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DeviceTableComponent
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
