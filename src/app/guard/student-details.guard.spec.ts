import { TestBed } from '@angular/core/testing';

import { StudentDetailsGuard } from './student-details.guard';

describe('StudentDetailsGuard', () => {
  let guard: StudentDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
