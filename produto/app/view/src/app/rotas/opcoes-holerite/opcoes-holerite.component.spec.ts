import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesHoleriteComponent } from './opcoes-holerite.component';

describe('OpcoesHoleriteComponent', () => {
  let component: OpcoesHoleriteComponent;
  let fixture: ComponentFixture<OpcoesHoleriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcoesHoleriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcoesHoleriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
