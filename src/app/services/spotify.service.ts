import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpService: HttpClient) {
    console.log("Service ready!");
  }

  public getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCy4hWOtfSz_xq_2Z887zmNDXfELLJY17eCd-fMm6w_63ghLbsj-ZEgpQhscojlJtm1ycenigc-uWcden8' 
    });

    this.httpService.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(res =>{
      console.log(res); 
    });
    
  }
}
