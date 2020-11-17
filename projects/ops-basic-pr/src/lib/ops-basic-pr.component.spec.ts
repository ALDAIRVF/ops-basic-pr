import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsBasicPrComponent } from './ops-basic-pr.component';

describe('OpsBasicPrComponent', () => {
  let component: OpsBasicPrComponent;
  let fixture: ComponentFixture<OpsBasicPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsBasicPrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsBasicPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
