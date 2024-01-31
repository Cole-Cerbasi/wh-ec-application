import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGComponent } from './footer-g.component';

describe('FooterGComponent', () => {
  let component: FooterGComponent;
  let fixture: ComponentFixture<FooterGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
