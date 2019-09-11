import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLixeirasComponent } from './listar-lixeiras.component';

describe('ListarLixeirasComponent', () => {
  let component: ListarLixeirasComponent;
  let fixture: ComponentFixture<ListarLixeirasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarLixeirasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLixeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
