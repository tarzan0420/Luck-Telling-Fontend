import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToCallComponent} from './page/how-to-call.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { HowToCallRoutingModule} from './how-to-call-routing.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
  	HowToCallComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    HowToCallRoutingModule,
    TranslateModule
  ]
})
export class HowToCallModule { }
