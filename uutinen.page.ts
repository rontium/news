import { UutislistaService } from './../uutislista.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uutinen',
  templateUrl: './uutinen.page.html',
  styleUrls: ['./uutinen.page.scss'],
})
export class UutinenPage implements OnInit {

  uutinen : any;

  constructor(private route : ActivatedRoute, private Uutislista : UutislistaService) { }

  ngOnInit() {

    let indeksi = Number(this.route.snapshot.paramMap.get("indeksi"));

    this.uutinen = this.Uutislista.uutiset[indeksi];

  }

}
