import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordKeepComplianceComponent } from './page/record-keeping-compliance.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { RecordKeepComplianceRoutingModule} from './record-keeping-compliance-routing.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
  	RecordKeepComplianceComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    RecordKeepComplianceRoutingModule,
    TranslateModule
  ]
})
export class RecordKeepComplianceModule { }
