import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsAndConditionsComponent} from './page/terms-and-conditions.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { TermsAndConditionsRoutingModule} from './terms-and-conditions-routing.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
  	TermsAndConditionsComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    TermsAndConditionsRoutingModule,
    TranslateModule
  ]
})
export class TermsAndConditionsModule { }
