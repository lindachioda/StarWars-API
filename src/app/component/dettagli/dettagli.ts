import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Serviceswapi } from '../../service/serviceswapi';

@Component({
  selector: 'app-dettagli',
  imports: [CommonModule],
  templateUrl: './dettagli.html',
  styleUrl: './dettagli.scss',
})
export class Dettagli implements OnInit{



  type:string = ''
  detail: any //la variabile di persone

  constructor(private route: ActivatedRoute, private serviceSwapi:Serviceswapi, private cdr:ChangeDetectorRef){}

  //parametri id e type
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{ //definisci id e type
    let type = params['type']
    let id = params['id']

    this.type = type //variabile per potere usare type nel html

    console.log(type)
    console.log(id)

    this.serviceSwapi.getDettagli(type, id) //chiama service con detDettagli
    .subscribe((detail)=>{

      this.detail = detail

      this.cdr.detectChanges()

       })
    })

  }
}
