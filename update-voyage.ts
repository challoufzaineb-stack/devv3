import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../services/voyage.service';
import { Voyage } from '../model/voyage.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-voyage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-voyage.html'
})
export class UpdateVoyageComponent implements OnInit {
  currentVoyage = new Voyage();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private voyageService: VoyageService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.currentVoyage = this.voyageService.consulterVoyage(id);
  }

  updateVoyage() {
    this.voyageService.updateVoyage(this.currentVoyage);
    this.router.navigate(['voyages']);
  }
}