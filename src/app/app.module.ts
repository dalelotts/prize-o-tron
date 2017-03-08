import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeetupeventComponent } from './meetupevent/meetupevent.component';
import { ExtendedInputComponent } from './extended-input/extended-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupeventComponent,
    ExtendedInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
