import { TestBed, inject } from '@angular/core/testing';

import { PersonsDataService } from './persons-data.service';

describe('PersonsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonsDataService]
    });
  });

  it('should be created', inject([PersonsDataService], (service: PersonsDataService) => {
    expect(service).toBeTruthy();
  }));
});
