import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbatchmanagerComponent } from './newbatchmanager.component';

describe('NewbatchmanagerComponent', () => {
  let component: NewbatchmanagerComponent;
  let fixture: ComponentFixture<NewbatchmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbatchmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewbatchmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
