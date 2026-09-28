import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Serviceswapi } from '../../service/serviceswapi';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pianeti',
  imports: [CommonModule, RouterLink],
  templateUrl: './pianeti.html',
  styleUrl: './pianeti.scss',
})
export class Pianeti implements OnInit{

  pianeti:any[] = []

  constructor(private http:HttpClient, private serviceSwapi:Serviceswapi, private cdr:ChangeDetectorRef){}

  ngOnInit():void {
     //get PIANETI
    this.serviceSwapi.getPianeti(`https://swapi.info/api/planets`)
    .subscribe((pianeti)=> {
      this.pianeti = pianeti

      console.log(this.pianeti)

      this.cdr.detectChanges()
    })
  }
}
