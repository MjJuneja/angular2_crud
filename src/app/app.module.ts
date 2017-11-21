import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ControlComponent } from './control/control.component';
import { EntryComponent } from './entry/entry.component';
import { EditComponent } from './edit/edit.component';
import { PopupModuleComponent } from './popup-module/popup-module.component';
import {DB} from './database';
import {FormsModule} from '@angular/forms';
import {UserRightGuard} from './user-right.guard';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ControlComponent,
    EntryComponent,
    EditComponent,
    PopupModuleComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule
  ],
  providers: [DB,UserRightGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
