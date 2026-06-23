import { TestBed } from '@angular/core/testing';

import { ApiMngService } from './api-mng.service';

describe('ApiMngService', () => {
  let service: ApiMngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
