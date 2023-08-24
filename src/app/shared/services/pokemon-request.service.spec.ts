import { TestBed } from '@angular/core/testing';

import { PokemonRequestService } from './pokemon-request.service';

describe('PokemonRequestService', () => {
  let service: PokemonRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
