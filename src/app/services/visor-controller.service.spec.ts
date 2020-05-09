import { TestBed } from '@angular/core/testing';

import { VisorControllerService } from './visor-controller.service';

describe('VisorControllerService', () => {
  let service: VisorControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisorControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
