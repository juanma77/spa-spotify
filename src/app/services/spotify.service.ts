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
      'Authorization': 'Bearer BQDuh75P3WSMNlL8KSu9VGH-a0muGom5LIE4cjsYdtmBr7rg2MR-IQaF_e_1Erj58zAiGIy4BVAPhd8AoYI' 
    });

    /*this.httpService.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(res =>{
      console.log(res); 
    });*/

    return this.httpService.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    
  }
}
