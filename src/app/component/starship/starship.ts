import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Serviceswapi } from '../../service/serviceswapi';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-starship',
  imports: [CommonModule, RouterLink],
  templateUrl: './starship.html',
  styleUrl: './starship.scss',
})
export class Starship implements OnInit{

  starships:any[] = []

  constructor(private http:HttpClient, private serviceSwapi:Serviceswapi, private cdr:ChangeDetectorRef){}

  ngOnInit():void {
     //get PIANETI
    this.serviceSwapi.getStarships(`https://swapi.info/api/starships`)
    .subscribe((starships)=> {
      this.starships = starships

      console.log(this.starships)

      this.cdr.detectChanges()
    })
  }
}
