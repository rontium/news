import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UutislistaService {

  uutiset : any[] = null;
  uusiaika : number;
  tulos : any;

  constructor(private http : HttpClient) { 

    let nykyaika = new Date();
    this.uusiaika = nykyaika.getTime()

    this.http.get("https://so3server.herokuapp.com/uutiset").subscribe((data : any[]) => {

    this.uutiset = data;

    });

  }

  update1 = () : void => {

    this.http.get("https://so3server.herokuapp.com/uutiset").subscribe((data : any[]) => {

    this.uutiset = data;

    });

  }

  laske = (alku, loppu) : any => {

     this.tulos = alku - loppu;
     let aikaH = formatDate(this.tulos, 'hh' ,'en-FI');
     let aikaM = formatDate(this.tulos, 'mm' ,'en-FI');

    return aikaH + " tuntia " + aikaM + " minuuttia sitten"
   
  }

}
