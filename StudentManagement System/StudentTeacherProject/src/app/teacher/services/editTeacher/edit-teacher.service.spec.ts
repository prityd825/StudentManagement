import { TestBed } from '@angular/core/testing';

import { EditTeacherService } from './edit-teacher.service';

describe('EditTeacherService', () => {
  let service: EditTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
