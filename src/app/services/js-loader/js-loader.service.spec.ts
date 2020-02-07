import { TestBed } from '@angular/core/testing';

import { JsLoaderService } from './js-loader.service';

describe('JsLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsLoaderService = TestBed.get(JsLoaderService);
    expect(service).toBeTruthy();
  });
});
