import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusedPasswordsComponent } from './reused-passwords.component';

describe('ReusedPasswordsComponent', () => {
  let component: ReusedPasswordsComponent;
  let fixture: ComponentFixture<ReusedPasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusedPasswordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusedPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
