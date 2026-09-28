import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Persone } from './component/persone/persone';
import { Film } from './component/film/film';
import { Pianeti } from './component/pianeti/pianeti';
import { Speci } from './component/speci/speci';
import { Veicoli } from './component/veicoli/veicoli';
import { Starship } from './component/starship/starship';
import { Dettagli } from './component/dettagli/dettagli';

export const routes: Routes = [
    {path:``, component: Home},
    {path:`people`, component: Persone},
    {path:`film`, component: Film},
    {path:`pianeti`, component: Pianeti},
    {path:`speci`, component: Speci},
    {path:`veicoli`, component: Veicoli},
    {path:`starship`, component: Starship},
    {path: `dettagli/:type/:id`, component: Dettagli}, //aggiungi /:id per chiamare l'id specifico che vuoi mostrare!
];
