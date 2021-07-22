import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import {ChatComponent} from './page/chat.component';
import { SharedModule,ImportsMaterialModule} from '@/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PipeModule} from '@/_pipe/pipe/pipe.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
  	ChatComponent
  ],
  imports: [
    ImportsMaterialModule,
    PipeModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ChatRoutingModule,
    TranslateModule
  ]
})

export class ChatModule { }
