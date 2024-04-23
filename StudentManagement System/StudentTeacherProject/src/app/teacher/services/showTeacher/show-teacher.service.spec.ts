import { TestBed } from '@angular/core/testing';

import { ShowTeacherService } from './show-teacher.service';

describe('ShowTeacherService', () => {
  let service: ShowTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
