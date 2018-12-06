import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDMCAComponent } from './edit-dmca.component';

describe('EditDMCAComponent', () => {
  let component: EditDMCAComponent;
  let fixture: ComponentFixture<EditDMCAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDMCAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDMCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
