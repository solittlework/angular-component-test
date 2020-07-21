import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularComponentsModule} from '@abgov/angular-components'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularComponentsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
