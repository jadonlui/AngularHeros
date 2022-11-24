import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataPipe } from './data.pipe';
import { DashboardComponent } from './pages/hero/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/hero/hero-detail/hero-detail.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { MessagesComponent } from './pages/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DataPipe,
    DashboardComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
