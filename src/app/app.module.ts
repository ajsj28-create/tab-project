import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabNgIfComponent } from './shared/component/tab-ng-if/tab-ng-if.component';
import { TabNgSwitchComponent } from './shared/component/tab-ng-switch/tab-ng-switch.component';
import { TabNgForComponent } from './shared/component/tab-ng-for/tab-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    TabNgIfComponent,
    TabNgSwitchComponent,
    TabNgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
