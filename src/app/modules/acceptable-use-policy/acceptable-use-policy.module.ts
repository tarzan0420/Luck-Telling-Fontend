import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptableUsePolicyComponent } from './page/acceptable-use-policy.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { AcceptableUsePolicyRoutingModule} from './acceptable-use-policy-routing.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
  	AcceptableUsePolicyComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    AcceptableUsePolicyRoutingModule,
    TranslateModule
  ]
})
export class AcceptableUsePolicyModule { }
