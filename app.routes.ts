import { Routes } from '@angular/router';
import { VoyagesComponent } from './voyages/voyages';
import { AddVoyageComponent } from './add-voyage/add-voyage';
import { UpdateVoyageComponent } from './update-voyage/update-voyage';

export const routes: Routes = [
  { path: 'voyages', component: VoyagesComponent },
  { path: 'add-voyage', component: AddVoyageComponent },
  { path: 'updateVoyage/:id', component: UpdateVoyageComponent },
  { path: '', redirectTo: 'voyages', pathMatch: 'full' }
];