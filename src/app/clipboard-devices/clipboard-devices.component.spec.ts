import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardDevicesComponent } from './clipboard-devices.component';

describe('ClipboardDevicesComponent', () => {
  let component: ClipboardDevicesComponent;
  let fixture: ComponentFixture<ClipboardDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipboardDevicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipboardDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
