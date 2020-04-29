
import { Component } from '@angular/core';
import { UutislistaService } from './../uutislista.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  uusiaika : number = null;

  constructor(public Uutislista : UutislistaService) {}

  update = () : void => {

    this.Uutislista.update1()

  }
}
