import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmListComponent } from './film-list/film-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmComponent } from './film/film.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FilmCardComponent } from './film-card/film-card.component';

const appRoutes: Routes =[
  {path: '', component: FilmComponent },
  {path: 'form', component: FilmFormComponent},
  { path: "film/:id", component: FilmCardComponent},
  {path: 'filmList', component: FilmListComponent},
 
];

@NgModule({
  declarations: [
    AppComponent,
    FilmFormComponent,
    FilmListComponent,
    FilmComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
