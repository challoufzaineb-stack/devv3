import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddVoyage } from './add-voyage';

describe('AddVoyage', () => {
  let component: AddVoyage;
  let fixture: ComponentFixture<AddVoyage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVoyage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddVoyage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
