import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFooterComponent } from './table-footer.component';

describe('TableFooterComponent', () => {
  let component: TableFooterComponent;
  let fixture: ComponentFixture<TableFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
