import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputFormPage } from './input-form.page';
import { By } from '@angular/platform-browser';

describe('InputFormPage', () => {
  let component: InputFormPage;
  let fixture: ComponentFixture<InputFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFormPage],
      imports: [ReactiveFormsModule, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate form on submit', () => {
    // Set the form values
    component.form.controls['modelsCount'].setValue(2);
    component.form.controls['monthsCount'].setValue(2);

    // Update form validity
    component.form.updateValueAndValidity();
    
    // Check if the form values are set correctly
    expect(component.form.valid).toBeTrue();
    expect(component.form.controls['modelsCount'].value).toBe(2);
    expect(component.form.controls['monthsCount'].value).toBe(2);

    // Call onSubmit method directly
    component.onSubmit();

    // Trigger change detection
    fixture.detectChanges();

    // Add debug output
    console.log('Generated Form:', component.generatedForm);
    console.log('Models:', component.models);
    console.log('Months:', component.months);

    // Verify the form was generated correctly
    expect(component.generatedForm).toBeTruthy();
    expect(component.models.length).toBe(2);
    expect(component.months.length).toBe(2);
  });

  it('should calculate sums correctly', () => {
    component.form.controls['modelsCount'].setValue(2);
    component.form.controls['monthsCount'].setValue(2);
    component.onSubmit();
    
    component.generatedForm?.controls['model0month0'].setValue(10);
    component.generatedForm?.controls['model0month1'].setValue(20);
    component.generatedForm?.controls['model1month0'].setValue(30);
    component.generatedForm?.controls['model1month1'].setValue(40);

    component.onCalculate();

    expect(component.rowSums).toEqual([30, 70]);
    expect(component.columnSums).toEqual([40, 60]);
    expect(component.totalSum).toBe(100);
  });
});
