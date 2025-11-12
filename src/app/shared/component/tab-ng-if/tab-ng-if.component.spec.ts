import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgIfComponent } from './tab-ng-if.component';

describe('TabNgIfComponent', () => {
  let component: TabNgIfComponent;
  let fixture: ComponentFixture<TabNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
