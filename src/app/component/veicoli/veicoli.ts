import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Serviceswapi } from '../../service/serviceswapi';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-veicoli',
  imports: [CommonModule, RouterLink],
  templateUrl: './veicoli.html',
  styleUrl: './veicoli.scss',
})
export class Veicoli implements OnInit{

  veicoli:any[] = []

  constructor(private http:HttpClient, private serviceSwapi:Serviceswapi, private cdr:ChangeDetectorRef){}

  ngOnInit():void {
     //get PIANETI
    this.serviceSwapi.getVeicoli(`https://swapi.info/api/vehicles`)
    .subscribe((veicoli)=> {
      this.veicoli = veicoli

      console.log(this.veicoli)

      this.cdr.detectChanges()
    })
  }
}
