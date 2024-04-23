import { TestBed } from '@angular/core/testing';

import { TeacherHomeService } from './teacher-home.service';

describe('TeacherHomeService', () => {
  let service: TeacherHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
