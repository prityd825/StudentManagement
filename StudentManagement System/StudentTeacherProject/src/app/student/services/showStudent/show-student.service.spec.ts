import { TestBed } from '@angular/core/testing';

import { ShowStudentService } from './show-student.service';

describe('ShowStudentService', () => {
  let service: ShowStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
