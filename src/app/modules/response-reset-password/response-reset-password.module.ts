import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseResetPasswordComponent } from './response-reset-password/response-reset-password.component';
import { ResponseResetPasswordRoutingModule } from './response-reset-password-routing.module';
import { ReactiveFormsModule,FormsModule }    from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ResponseResetPasswordComponent],
  imports: [
    CommonModule,
	ReactiveFormsModule,
	FormsModule,
	ResponseResetPasswordRoutingModule,
  TranslateModule
  ]
})
export class ResponseResetPasswordModule { }
