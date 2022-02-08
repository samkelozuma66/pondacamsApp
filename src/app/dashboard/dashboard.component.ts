import { Component, Inject, Input, OnInit } from '@angular/core';
import { ModelServiceService } from '../model-service.service';
import { model } from '../models';
import { DOCUMENT } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  models:model[] = [] ;
  @Input() error:string = " Test sadadsadadasdasdsa";
  
  

  constructor(private modelService: ModelServiceService,
              @Inject(DOCUMENT) document:any,
              private router: Router) { }

  ngOnInit(): void {
    this.getModels();
  }
  
  getModels(): void{
    
    this.modelService.getModels()
      .subscribe(models => {this.models = models;},error => {this.error = error.error;}) ;

    

  }

  playVideo(videoId : string): void{
    //@ViewChild(videoId) videoplayer: ElementRef;
    //get('[id='+videoId+']');
    //video: Object = (<HTMLVideoElement>document.getElementById(videoId));
    (<HTMLVideoElement>document.getElementById(videoId)).style.display ="block" ;
    (<HTMLVideoElement>document.getElementById(videoId)).play() ;
    //document.getElementById(videoId).nativ;
    this.error = videoId;
    //_videoPlay.style;
  }
  pauseVideo(videoId : string): void{
    (<HTMLVideoElement>document.getElementById(videoId)).style.display ="none" ;
    (<HTMLVideoElement>document.getElementById(videoId)).pause() ;
    this.error = videoId;
  }
  goToVideoChat(){
    
  }

}
