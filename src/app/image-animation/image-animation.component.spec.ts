import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAnimationComponent } from './image-animation.component';

describe('ImageAnimationComponent', () => {
  let component: ImageAnimationComponent;
  let fixture: ComponentFixture<ImageAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
