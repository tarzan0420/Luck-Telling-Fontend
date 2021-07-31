import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountRoutingModule } from './bank-account-routing.module';
import {BankAccountComponent} from './page/bank-account.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
  	BankAccountComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    FormsModule,
    BankAccountRoutingModule,
    TranslateModule
  ]
})
export class BankAccountModule { }
