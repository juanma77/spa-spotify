import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpService: HttpClient) {
    console.log("Service ready!");
  }

  // Obtener los new releases; debemos poner los Headers pues si no marca error de autorización 
  public getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDyGI7JZkGRway4mtfpFZW2nl18HXEXtCGftqrTdM2Cqv5jbcor7pL66lb94O8C0LkUY_fA02aLt-HcoiA' 
    });

    /*this.httpService.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(res =>{
      console.log(res); 
    });*/

    return this.httpService.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    
  }

  // Obtener un artista de acuerdo a un termino de búsqueda 
  public getArtist(termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDyGI7JZkGRway4mtfpFZW2nl18HXEXtCGftqrTdM2Cqv5jbcor7pL66lb94O8C0LkUY_fA02aLt-HcoiA' 
    });

    return this.httpService.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });

  }
}
