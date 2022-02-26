import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserAuthModule} from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Child1Component } from './child1/child1.component';
import{FormsModule} from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { RedElDirective } from './red-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    Child1Component,
    UsdInrPipe,
    RedElDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
