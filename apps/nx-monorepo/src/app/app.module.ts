import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosListModule } from '@nx-monorepo/ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ],
  imports: [BrowserModule, HttpClientModule, TodosListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
