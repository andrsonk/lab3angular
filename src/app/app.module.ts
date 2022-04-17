import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { SelectedProgramComponent } from './selected-program/selected-program.component';
import { ExersizeComponent } from './exersize/exersize.component';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { ProgramComponent } from './program/program.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    HeaderComponent,
    CategoryComponent,
    SelectedProgramComponent,
    ExersizeComponent,
    ProgramsListComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
