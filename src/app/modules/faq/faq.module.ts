import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './page/faq.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { FaqRoutingModule} from './faq-routing.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
  	FaqComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    FaqRoutingModule,
    TranslateModule
  ]
})
export class FaqModule { }
