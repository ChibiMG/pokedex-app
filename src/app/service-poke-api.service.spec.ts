import { TestBed } from '@angular/core/testing';

import { PokeApiService } from './service-poke-api.service';

describe('ServicePokeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeApiService = TestBed.get(PokeApiService);
    expect(service).toBeTruthy();
  });
});
