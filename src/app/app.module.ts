import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularCursosCliComponent } from './angular-cursos-cli/angular-cursos-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularCursosCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
