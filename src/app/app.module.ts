import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DiertivesComponent } from './diertives/diertives.component';
import { DirectivesifComponent } from './directivesif/directivesif.component';
import { DirectivesswitchComponent } from './directivesswitch/directivesswitch.component';
import { AttributedirectivesComponent } from './attributedirectives/attributedirectives.component';
import { StyledirectivesComponent } from './styledirectives/styledirectives.component';
import { DireativecreationComponent } from './direativecreation/direativecreation.component';
import { MouseoverleaveComponent } from './mouseoverleave/mouseoverleave.component';

import { PredefinepipeComponent } from './predefinepipe/predefinepipe.component';
import { Pipedri1Component } from './pipedri1/pipedri1.component';
import { ApppipeComponent } from './apppipe/apppipe.component';
import { MyBoldPipe } from './apppipe/bold-pipe';
import { ReverseStringPipe } from './apppipe/reversebold';


@NgModule({
  declarations: [
    AppComponent,
    DiertivesComponent,
    DirectivesifComponent,
    DirectivesswitchComponent,
    AttributedirectivesComponent,
    StyledirectivesComponent,
    DireativecreationComponent,
    MouseoverleaveComponent,
    PredefinepipeComponent,
    Pipedri1Component,
    ApppipeComponent,
    MyBoldPipe,
    ReverseStringPipe,
   
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
