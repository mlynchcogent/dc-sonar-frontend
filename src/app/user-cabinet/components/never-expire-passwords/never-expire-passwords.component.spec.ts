import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeverExpirePasswordsComponent } from './never-expire-passwords.component';

describe('NeverExpirePasswordsComponent', () => {
  let component: NeverExpirePasswordsComponent;
  let fixture: ComponentFixture<NeverExpirePasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeverExpirePasswordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeverExpirePasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
