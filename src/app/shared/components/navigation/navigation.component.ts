import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { SearchService} from '@/_servies/';
import {PageconfigService} from '@/_servies/pageconfig.service';  
import {CallService} from '@/_servies/call.service';
import { AuthenticationService} from '@/_servies/authentication.service';

import { Config} from '@/_models';
import { first } from 'rxjs/operators';
import {  User} from '@/_models';
import { Router} from '@angular/router';
import { Subject} from 'rxjs';
import {environment} from 'environments/environment'
import { Location } from '@angular/common';

import {TranslateService} from '@ngx-translate/core';

declare var $:any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user:User;
  pageConfig;
  timer:number=0;
  isShowModal:boolean=false;
  baseUrl=environment.apiUrl;
  results: object[];
  searchTerm$ = new Subject<string>();
  actiionProfile:boolean=false;
  acitveToggleMenu:boolean=false;
  @ViewChild('toggleMenu',{static:true}) toggleMenu:ElementRef;
  @ViewChild('rightHeader',{static:true}) rightHeader:ElementRef;


  selectedCountryCode = 'us';
  countryCodes = ['us', 'kw', 'de', 'es', 'fr', 'il', 'it', 'jp', 'nl', 'pt', 'ru', 'tr', 'pk', 'cn'];

  changeSelectedCountryCode(value: string): void {
    let selectedLanguageCode = 'en';
    switch(value){
      case 'us' : selectedLanguageCode = 'en'; break;
      case 'kw' : selectedLanguageCode = 'ar'; break;
      case 'il' : selectedLanguageCode = 'he'; break;
      case 'jp' : selectedLanguageCode = 'ja'; break;
      case 'pk' : selectedLanguageCode = 'ur'; break;
      case 'cn' : selectedLanguageCode = 'zh'; break;
      default : selectedLanguageCode = value; break;
    }
    this.translate.use(selectedLanguageCode);
    console.log("selectedLanguageCode : ", selectedLanguageCode);
  }
  
  constructor(private authentication :AuthenticationService,
    private callService:CallService,private searchService:SearchService,private pageConfigService:PageconfigService,private location:Location,
    private router:Router,
    public translate: TranslateService) { 

      this.translate.addLangs(this.countryCodes);
      
      // Get Country Code
      var countryCode = Intl.DateTimeFormat().resolvedOptions().locale.substr(0,2);
      console.log("Country Code ", countryCode);
      if (this.countryCodes.indexOf(countryCode) > -1) {
        translate.setDefaultLang(countryCode);
      } else {
        translate.setDefaultLang('en');  
      }
      // translate.use(countryCode);
      // translate.setDefaultLang('en');


      this.searchTerm$.subscribe(inputData => {
      });
      this.searchService.search(this.searchTerm$).subscribe(results => {
          this.results = results.data;
      });
      this.pageConfigService.currentConfig.subscribe(data=>{
        if(data !=null)
        {
          this.pageConfig=data;
        }
        else
        {
          this.pageConfig = new Config();
        }
      })
      
    }

  ngOnInit() {
    this.callService.remainingTime$.subscribe(data=>{
      if(data <=0)
      {
        this.timer=0;
      }
      else
      {
        this.timer=data;
      }
    },
    err=>{
      this.timer=0;
    })
    this.user= this.authentication.currentUserValue;
  }
  
  showAction(){
    this.actiionProfile=!this.actiionProfile;
  }

  logout(){
    this.authentication.logout();
   // this.location.back();
    //this.router.navigate(['/']);
  }
  ngAfterViewInit(){
    // $('.toggle-menu').click(function(){
    //   $('.right-header').toggleClass('active');
    //   $(this).toggleClass('active');
    // });
    // this.toggleMenu.nativeElement.on('click',(event)=>{
    //   this.rightHeader.nativeElement.classList.add('active');
    //   //$(this).toggleClass('active');
    //   this.acitveToggleMenu=!this.acitveToggleMenu;
    // })

    // $('.toogle-chat').click(function(){
    //   $('.chat-main').toggleClass('active');
    //   $(this).toggleClass('active');
    // });

   
  }

 
}
