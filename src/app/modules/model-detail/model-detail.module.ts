import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelDetailComponent} from './page/model-detail.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { ModelDetailRoutingModule} from './model-detail-routing.module'
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
  	ModelDetailComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ModelDetailRoutingModule,
    TranslateModule
  ]
})
export class ModelDetailModule { }
