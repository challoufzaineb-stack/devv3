import { Injectable } from '@angular/core';
import { Voyage } from '../model/voyage.model';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  voyages: Voyage[];
  voyage!: Voyage;

  constructor() {
    this.voyages = [
      { idVoyage: 1, destination: "Paris", prixVoyage: 3000.600, dateDepart: new Date("01/14/2026") },
      { idVoyage: 2, destination: "Londres", prixVoyage: 2450, dateDepart: new Date("12/17/2026") },
      { idVoyage: 3, destination: "Dubai", prixVoyage: 2900.123, dateDepart: new Date("02/20/2026") }
    ];
  }

  listeVoyages(): Voyage[] {
    return this.voyages;
  }

  ajouterVoyage(v: Voyage) {
    this.voyages.push(v);
  }

  supprimerVoyage(v: Voyage) {
    const index = this.voyages.indexOf(v, 0);
    if (index > -1) {
      this.voyages.splice(index, 1);
    }
  }

  consulterVoyage(id: number): Voyage {
    this.voyage = this.voyages.find(p => p.idVoyage == id)!;
    return this.voyage;
  }

  updateVoyage(v: Voyage) {
    const index = this.voyages.indexOf(v, 0);
    if (index > -1) {
      this.voyages.splice(index, 1);
      this.voyages.splice(index, 0, v);
    }
  }
}