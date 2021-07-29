import { Component, OnInit } from '@angular/core';
import { PageconfigService, AlertService } from '@/_servies';
import { Alert } from '@/_models';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
  content:any;
  constructor(
    private sanitizer: DomSanitizer,
    private alertService:AlertService,
    private pageConfig:PageconfigService
  ) { 
  }

  ngOnInit() {
    const slug='terms-and-conditions';
    this.pageConfig.getStaticPage(slug).subscribe(response=>{
      this.content=this.sanitizer.bypassSecurityTrustHtml(response.data.content);
    },err=>{
      this.alertService.error("Errors")
    })
  }

}
