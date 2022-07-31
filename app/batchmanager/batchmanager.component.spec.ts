import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchmanagerComponent } from './batchmanager.component';

describe('BatchmanagerComponent', () => {
  let component: BatchmanagerComponent;
  let fixture: ComponentFixture<BatchmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
