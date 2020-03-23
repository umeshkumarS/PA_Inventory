import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatExpansionModule,MatIconModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { NgbdPopoverTriggers } from './popover-triggers';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
