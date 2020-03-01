import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaFormComponent } from './maquina-form.component';

describe('MaquinaFormComponent', () => {
  let component: MaquinaFormComponent;
  let fixture: ComponentFixture<MaquinaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
