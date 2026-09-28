import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Serviceswapi } from '../../service/serviceswapi';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film',
  imports: [CommonModule, RouterLink],
  templateUrl: './film.html',
  styleUrl: './film.scss',
})
export class Film implements OnInit{

  films:any[] = []


  constructor(private http:HttpClient, private serviceSwapi:Serviceswapi, private cdr:ChangeDetectorRef){}

  ngOnInit():void {
     //get FILM
    this.serviceSwapi.getFilms(`https://swapi.info/api/films`)
    .subscribe((films)=> {
      this.films = films

      console.log(this.films)
  

      this.cdr.detectChanges()
    })
}
}