import { TestBed } from '@angular/core/testing';

import { WordsServiceService } from './words-service.service';

describe('WordsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsServiceService = TestBed.get(WordsServiceService);
    expect(service).toBeTruthy();
  });
});
