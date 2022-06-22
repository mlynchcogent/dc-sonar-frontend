import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeakPasswordsComponent } from './weak-passwords.component';

describe('WeakPasswordsComponent', () => {
  let component: WeakPasswordsComponent;
  let fixture: ComponentFixture<WeakPasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeakPasswordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeakPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
