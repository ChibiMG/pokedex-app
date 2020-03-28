import { TestBed } from '@angular/core/testing';

import { ServicePokeIdService } from './service-poke-id.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePokeIdService = TestBed.get(ServicePokeIdService);
    expect(service).toBeTruthy();
  });
});
