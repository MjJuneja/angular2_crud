import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ControlComponent } from './control/control.component';
import { EntryComponent } from './entry/entry.component';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { PopupModuleComponent } from './popup-module/popup-module.component';
import {UserRightGuard} from './user-right.guard';
const routes: Routes = [
    {
        path: 'add',
        component: EntryComponent,
        canActivate:[UserRightGuard]
    },
    {
        path: 'show',
        component: EditComponent,
        children: [{path:'edit/:id/:name/:desc' , component:PopupModuleComponent,  canActivate:[UserRightGuard]}]
    },
    
    // {path:'edit' , component:PopupModuleComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }