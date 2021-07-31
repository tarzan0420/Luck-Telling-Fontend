import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent} from './page/packages.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { PackagesRoutingModule} from './packages-routing.module';
import {TranslateModule} from "@ngx-translate/core";
@NgModule({
  declarations: [
  	PackagesComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    PackagesRoutingModule,
    TranslateModule
  ]
})
export class PackagesModule { }
