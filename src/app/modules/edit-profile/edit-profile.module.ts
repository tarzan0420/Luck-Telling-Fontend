import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent} from './page/edit-profile.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { EditProfileRoutingModule} from './edit-profile-routing.module'
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
  	EditProfileComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    FormsModule,
    EditProfileRoutingModule,
    TranslateModule
  ]
})
export class EditProfileModule { }
