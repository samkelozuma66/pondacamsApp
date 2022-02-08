import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { model } from './models'
import { country } from './country'
import { modelpictures } from './modelpictures'

@Injectable({
  providedIn: 'root'
})
export class ModelServiceService {

  constructor(private http: HttpClient) { }

  getModels(): Observable<model[]>{
    //http://pondacams.com/getModels.php
    const fullUrl = "http://pondacams.com/getModels.php"; 
    
    const resp = this.http.get<model[]>(fullUrl);
   
    return resp;
  }
  getModel(id:string): Observable<model>{
    //http://pondacams.com/getModel.php
    const fullUrl = "http://pondacams.com/getModel.php?model_id="+id; 
    
    const resp = this.http.get<model>(fullUrl);
   
    return resp;
  }

  getCountry(code:string): Observable<country>{
    const fullUrl = "http://pondacams.com/getCountry.php?country_code="+code; 
    
    const resp = this.http.get<country>(fullUrl);
   
    return resp;
  }
  getPictures(model_id:number): Observable<modelpictures[]>{
    const fullUrl = "http://pondacams.com/getPictures.php?model_id="+model_id; 
    
    const resp = this.http.get<modelpictures[]>(fullUrl);
   
    return resp;
  }
}
