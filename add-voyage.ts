import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Voyage } from '../model/voyage.model';
import { VoyageService } from '../services/voyage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voyage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-voyage.html',
  styleUrl: './add-voyage.css'
})
export class AddVoyageComponent implements OnInit {
  newVoyage = new Voyage();

  constructor(private voyageService: VoyageService, private router: Router) { }

  ngOnInit(): void { }

  addVoyage() {
    this.voyageService.ajouterVoyage(this.newVoyage);
    this.router.navigate(['voyages']);
  }
}