import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Serviceswapi } from '../../service/serviceswapi';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-persone',
  imports: [CommonModule, RouterLink],
  templateUrl: './persone.html',
  styleUrl: './persone.scss',
})
export class Persone implements OnInit{

  persone:any[] = []

  constructor(private http:HttpClient, private serviceSwapi:Serviceswapi, private cdr:ChangeDetectorRef){}

  ngOnInit():void {
     //get PERSONE
    this.serviceSwapi.getPersone(`https://swapi.info/api/people`)
    .subscribe((persone)=> {
      this.persone = persone

      console.log(this.persone)

      this.cdr.detectChanges()
    })

    
  }
  
}
