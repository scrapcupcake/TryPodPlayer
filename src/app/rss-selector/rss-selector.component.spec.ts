import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssSelectorComponent } from './rss-selector.component';

describe('RssSelectorComponent', () => {
  let component: RssSelectorComponent;
  let fixture: ComponentFixture<RssSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
