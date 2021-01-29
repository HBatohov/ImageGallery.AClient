import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureHallComponent } from './picture-hall.component';

describe('PictureHallComponent', () => {
  let component: PictureHallComponent;
  let fixture: ComponentFixture<PictureHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
