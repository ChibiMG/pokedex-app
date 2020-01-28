import { TestBed } from '@angular/core/testing';

import { ServicePokeApiService } from './service-poke-api.service';

describe('ServicePokeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePokeApiService = TestBed.get(ServicePokeApiService);
    expect(service).toBeTruthy();
  });
});
