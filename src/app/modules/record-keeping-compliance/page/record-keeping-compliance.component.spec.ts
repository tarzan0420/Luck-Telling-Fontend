import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordKeepComplianceComponent } from './record-keeping-compliance.component';

describe('AcceptableUsePolicyComponent', () => {
  let component: RecordKeepComplianceComponent;
  let fixture: ComponentFixture<RecordKeepComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordKeepComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordKeepComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
