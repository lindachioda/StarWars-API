import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Serviceswapi } from '../../service/serviceswapi';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-speci',
  imports: [CommonModule, RouterLink],
  templateUrl: './speci.html',
  styleUrl: './speci.scss',
})
export class Speci implements OnInit{

  species:any[] = []

  constructor(private http:HttpClient, private serviceSwapi:Serviceswapi, private cdr:ChangeDetectorRef){}

  ngOnInit():void {
     //get SPECI
    this.serviceSwapi.getSpeci(`https://swapi.info/api/species`)
    .subscribe((species)=> {
      this.species = species

      console.log(this.species)

      this.cdr.detectChanges()
    })
  }
}
