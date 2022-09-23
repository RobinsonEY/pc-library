/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActionEditorComponent } from 'app/pages/maintenance/action/action-editor/action-editor.component';

fdescribe('ActionEditorComponent', () => {
  let component: ActionEditorComponent;
  let fixture: ComponentFixture<ActionEditorComponent>;
  let ref: NbDialogRef<ActionEditorComponent>;

  beforeEach(async () => {
    const refStub = () => ({
			close: () => ({})
		});
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ ActionEditorComponent ],
      providers: [
        FormBuilder,
        { provide: NbDialogRef, useFactory: refStub }]
    })
    .compileComponents();
    ref = TestBed.inject(NbDialogRef);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get title with isEdit', () => {

		expect(component.operation).toBe('Crear');
	});

  it('should defaultFormContent', () => {
    const content = {
      id: 0,
      code: '',
      name: '',
      enabled: true,
    };
    component.defaultFormContent();
		expect(component.defaultFormContent()).toEqual(content);
	});
  
  it('should close', () => {
    spyOn(ref, 'close');
    component.close();
		expect(ref.close).toHaveBeenCalled();
	});
});
