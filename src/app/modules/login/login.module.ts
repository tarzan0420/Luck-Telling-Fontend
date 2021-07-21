import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './page/login.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { LoginRoutingModule} from './login-routing.module'

import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
  	LoginComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    TranslateModule
  ]
})
export class LoginModule { }
