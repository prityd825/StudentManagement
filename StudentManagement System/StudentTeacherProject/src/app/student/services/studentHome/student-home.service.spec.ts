import { TestBed } from '@angular/core/testing';

import { StudentHomeService } from './student-home.service';

describe('StudentHomeService', () => {
  let service: StudentHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
