import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { PipesModule } from './shared/pipes/pipes.module';

@NgModule({
  declarations: [AppComponent  ,LayoutComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, PipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
