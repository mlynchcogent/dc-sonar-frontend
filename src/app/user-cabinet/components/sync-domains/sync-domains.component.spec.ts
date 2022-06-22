import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncDomainsComponent } from './sync-domains.component';

describe('SyncDomainsComponent', () => {
  let component: SyncDomainsComponent;
  let fixture: ComponentFixture<SyncDomainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncDomainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
