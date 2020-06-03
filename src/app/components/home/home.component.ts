import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public paises: any [] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/en').subscribe((res:any) =>{
      this.paises = res; 
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
