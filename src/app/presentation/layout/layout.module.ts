import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeComponent } from './components/mode/mode.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { MessagesComponent } from './components/messages/messages.component';
import { BaseLoggedComponent } from './base-logged/base-logged.component';
import { BaseAuthComponent } from './base-auth/base-auth.component';



@NgModule({
  declarations: [
    MenuComponent,
    MessagesComponent,
    ModeComponent,
    NavbarComponent,
    LogoComponent,
    BaseLoggedComponent,
    BaseAuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
