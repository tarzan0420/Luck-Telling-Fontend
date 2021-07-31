import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsManagerComponent} from './page/ads-manager.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { AdsManagerRoutingModule} from './ads-manager-routing.module';
import {TranslateModule} from "@ngx-translate/core";
@NgModule({
  declarations: [
  	AdsManagerComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    AdsManagerRoutingModule,
    TranslateModule
  ]
})

export class AdsManagerModule { }
