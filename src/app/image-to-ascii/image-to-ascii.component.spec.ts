import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToAsciiComponent } from './image-to-ascii.component';

describe('ImageToAsciiComponent', () => {
  let component: ImageToAsciiComponent;
  let fixture: ComponentFixture<ImageToAsciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageToAsciiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageToAsciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
