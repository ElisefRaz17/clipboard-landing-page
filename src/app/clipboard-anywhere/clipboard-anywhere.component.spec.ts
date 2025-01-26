import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardAnywhereComponent } from './clipboard-anywhere.component';

describe('ClipboardAnywhereComponent', () => {
  let component: ClipboardAnywhereComponent;
  let fixture: ComponentFixture<ClipboardAnywhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipboardAnywhereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipboardAnywhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
