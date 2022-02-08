import { Input } from '@angular/core';
import { Component, OnInit ,HostListener } from '@angular/core';
import { ModelServiceService } from '../model-service.service';
import { model } from '../models';
import { country } from '../country';
import { modelpictures } from '../modelpictures';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css']
})
export class VideoChatComponent implements OnInit {
  faStar=faStar;
  farStar=farStar;
  id:string = String(this.route.snapshot.paramMap.get('id'));
  public innerWidth: any;
  model!:model;
  country!:country;
  mmodelpictures:modelpictures[] = [];

  @Input() error:string = " Test sadadsadadasdasdsa";
  constructor(private route: ActivatedRoute,
              private modelService: ModelServiceService) { }

  ngOnInit(): void {
    this.getModel();
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  getModel(): void{
    
    this.modelService.getModel(this.id)
      .subscribe(model => {this.model = model;
                           this.getCountry(model.country_code);
                           this.getPictures(model.model_id);},error => {this.error = error.error;}) ;
  }
  getCountry(code:string): void {
    this.modelService.getCountry(code)
      .subscribe(country => {this.country = country;},error => {this.error = error.error;}) ;
  }
  getPictures(model_id:number): void {
    this.modelService.getPictures(model_id)
      .subscribe(mmodelpictures => {this.mmodelpictures = mmodelpictures;},error => {this.error = error.error;}) 
  }
  displayBuy(divId:string){
    (<HTMLDivElement>document.getElementById(divId)).style.display ="block" ;

    //(<HTMLVideoElement>document.getElementById(videoId)).play() ;
  }
  hideBuy(divId:string){
    (<HTMLDivElement>document.getElementById(divId)).style.display ="none" ;
    
    //(<HTMLVideoElement>document.getElementById(videoId)).play() ;
  }
}
