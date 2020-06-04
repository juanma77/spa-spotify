import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

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
      'Authorization': 'Bearer BQAllAL6sRSxRQpFJSs0sa9nB1Vx5IW2UYXFpR-URvwwOz56MCeIcLuroOzvEvgL2N-AuywKCQN6rOnqUQg' 
    });

    // Pipe es para transformar datos y el map para filtrar la información que nos interesa; para no recibir toda
    return this.httpService.get('https://api.spotify.com/v1/browse/new-releases', { headers }).pipe( map(data =>{
      return data['albums'].items;
    }));

  }

  // Obtener un artista de acuerdo a un termino de búsqueda 
  public getArtist(termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAllAL6sRSxRQpFJSs0sa9nB1Vx5IW2UYXFpR-URvwwOz56MCeIcLuroOzvEvgL2N-AuywKCQN6rOnqUQg' 
    });

    return this.httpService.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers }).pipe(map (data =>{
      return data['artists'].items;
    }));

  }
}
