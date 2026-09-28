import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Serviceswapi {

  

  urlPersone:string = `https://swapi.info/api/people`
  urlFilms:string = `https://swapi.info/api/films`
  urlPianeti:string = `https://swapi.info/api/planets`
  urlSpeci:string = `https://swapi.info/api/species`
  urlVeicoli:string = `https://swapi.info/api/vehicles`
  urlStarships:string = `https://swapi.info/api/starships`


  constructor(private http:HttpClient){}

  //per la funzione url
  getUrl(url:string){
  return this.http.get<any>(url) 
}

  //metodo per chiamare tutti i dettagli con parametri e id!!
  getDettagli(type:string, id:string){
    return this.http.get<any>(`https://swapi.info/api/${type}/${id}`)
    
  }

  //metodo get persone 
  getPersone(url:string){
    return this.http.get<any>(this.urlPersone)
    .pipe( 
      map((persone: any[]) => { //map di rxjs

        return persone.map(person => ({
          ...person,
          id: person.url.split('/')[5]// la quinta parte dell'url è l'id!!!
        }))

      })
    )
  }

   //metodo get film
  getFilms(url:string){
    return this.http.get<any>(this.urlFilms)
    .pipe( 
      map((films: any[]) => { 

        return films.map(film => ({
          ...film,
          id: film.url.split('/')[5]// la quinta parte dell'url è l'id!!!
        }))

      })
    )
  }

  //metodo get pianeti
  getPianeti(url:string){
    return this.http.get<any>(this.urlPianeti)
    .pipe( 
      map((planets: any[]) => { 

        return planets.map(planet => ({
          ...planet,
          id: planet.url.split('/')[5]// la quinta parte dell'url è l'id!!!
        }))

      })
    )
  }

  //metodo get speci
  getSpeci(url:string){
    return this.http.get<any>(this.urlSpeci)
    .pipe( 
      map((speci: any[]) => { 

        return speci.map(specie => ({
          ...specie,
          id: specie.url.split('/')[5]// la quinta parte dell'url è l'id!!!
        }))

      })
    )
  }

  //metodo get veicoli
  getVeicoli(url:string){
    return this.http.get<any>(this.urlVeicoli)
    .pipe( 
      map((veichles: any[]) => { 

        return veichles.map(veichle => ({
          ...veichle,
          id: veichle.url.split('/')[5]// la quinta parte dell'url è l'id!!!
        }))

      })
    )
  }

    //metodo get starships
  getStarships(url:string){
    return this.http.get<any>(this.urlStarships)
    .pipe( 
      map((starships: any[]) => { 

        return starships.map(starship => ({
          ...starship,
          id: starship.url.split('/')[5]// la quinta parte dell'url è l'id!!!
        }))

      })
    )
  }


}
