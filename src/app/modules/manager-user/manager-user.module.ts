import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerUserComponent} from './page/manager-user.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { ManagerUserRoutingModule} from './manager-user-routing.module';
import {TranslateModule} from "@ngx-translate/core";
@NgModule({
  declarations: [
  	ManagerUserComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ManagerUserRoutingModule,
    TranslateModule
  ]
})
export class ManagerUserModule { }
