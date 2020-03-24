import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonChoiceComponent } from './pokemon-choice.component';

describe('PokemonChoiceComponent', () => {
  let component: PokemonChoiceComponent;
  let fixture: ComponentFixture<PokemonChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
