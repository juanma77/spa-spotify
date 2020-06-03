import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpService: HttpClient) {
    console.log("Service ready!");
  }

  public getNewReleases(){

    this.httpService.get('https://api.spotify.com/v1/browse/new-releases').subscribe(res =>{
      console.log(res); 
    });
    
  }
}
