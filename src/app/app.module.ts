import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RolesComponent } from './roles/roles.component';
import { PersonsComponent } from './persons/persons.component';
import { UsersComponent } from './users/users.component';

import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  { path: 'roles', component: RolesComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RolesComponent,
    PersonsComponent,
    UsersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes ),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
