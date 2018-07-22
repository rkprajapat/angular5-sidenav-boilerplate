import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import {MaterialModule} from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';
import { ProjectsSummaryComponent } from 'app/components/projects-summary/projects-summary.component';
import { MessagesComponent } from 'app/components/messages/messages.component';
import { InstancesComponent } from 'app/components/instances/instances.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavResponsiveComponent,
    ProjectsSummaryComponent,
    MessagesComponent,
    InstancesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, SidenavResponsiveComponent],
  // entryComponents: []
})
export class AppModule { }
