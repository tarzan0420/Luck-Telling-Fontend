import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReviewComponent} from './page/all-review.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { AllReviewRoutingModule} from './all-review-routing.module'
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
  	AllReviewComponent
  ],
  imports: [
    ImportsMaterialModule,
    ReactiveFormsModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    AllReviewRoutingModule,
    TranslateModule
  ]
})

export class AllReviewModule { }
