import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMCACopyrightComponent } from './dmca-copyright.component';

describe('DMCACopyrightComponent', () => {
  let component: DMCACopyrightComponent;
  let fixture: ComponentFixture<DMCACopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMCACopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMCACopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
