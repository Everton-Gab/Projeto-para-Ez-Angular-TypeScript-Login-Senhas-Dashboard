import { TestBed } from '@angular/core/testing';

import { ApiMock } from './api-mock';

describe('ApiMock', () => {
  let service: ApiMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
