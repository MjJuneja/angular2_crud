import { TestBed, async, inject } from '@angular/core/testing';

import { UserRightGuard } from './user-right.guard';

describe('UserRightGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRightGuard]
    });
  });

  it('should ...', inject([UserRightGuard], (guard: UserRightGuard) => {
    expect(guard).toBeTruthy();
  }));
});
