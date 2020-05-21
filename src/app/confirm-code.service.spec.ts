import { TestBed } from '@angular/core/testing';

import { ConfirmCodeService } from './confirm-code.service';

describe('ConfirmCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmCodeService = TestBed.get(ConfirmCodeService);
    expect(service).toBeTruthy();
  });
});
