import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Voyage } from '../model/voyage.model';
import { VoyageService } from '../services/voyage.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-voyages',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './voyages.html',
  styleUrl: './voyages.css'
})
export class VoyagesComponent implements OnInit {
  voyages: Voyage[];

  constructor(private voyageService: VoyageService) {
    this.voyages = voyageService.listeVoyages();
  }

  ngOnInit(): void {}

  supprimerVoyage(v: Voyage) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.voyageService.supprimerVoyage(v);
  }
}