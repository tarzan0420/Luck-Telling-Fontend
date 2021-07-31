import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerWithdrawComponent } from './page/manager-withdraw.component';
import {ManagerWithdrawRoutingModule} from './manager-withdraw-routing.module';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
  	ManagerWithdrawComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ManagerWithdrawRoutingModule,
    TranslateModule
  ]
})

export class ManagerWithdrawModule { }
