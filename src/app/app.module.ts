import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeetupeventComponent } from './meetupevent/meetupevent.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { ExtendedInputComponent } from './extended-input/extended-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupeventComponent,
    RsvpFormComponent,
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
