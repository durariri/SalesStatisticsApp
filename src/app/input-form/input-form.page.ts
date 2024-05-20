import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.page.html',
  styleUrls: ['./input-form.page.scss'],
})
export class InputFormPage {
  form: FormGroup;
  generatedForm: FormGroup | null = null;
  models: number[] = [];
  months: number[] = [];
  rowSums: number[] = [];
  columnSums: number[] = [];
  totalSum: number = 0;
  @Output() salesData = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      modelsCount: ['', [Validators.required, Validators.min(1)]],
      monthsCount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    const modelsCount = this.form.value.modelsCount;
    const monthsCount = this.form.value.monthsCount;
  
    console.log('Models Count:', modelsCount);
    console.log('Months Count:', monthsCount);
  
    this.models = Array(modelsCount).fill(0);
    this.months = Array(monthsCount).fill(0);
  
    const group: { [key: string]: any } = {};
    this.models.forEach((_, i) => {
      this.months.forEach((_, j) => {
        group[`model${i}month${j}`] = ['', Validators.required];
      });
    });
  
    console.log('Form Group:', group);
  
    this.generatedForm = this.fb.group(group);
    this.rowSums = Array(modelsCount).fill(0);
    this.columnSums = Array(monthsCount).fill(0);
  
    console.log('Generated Form:', this.generatedForm);
    console.log('Row Sums:', this.rowSums);
    console.log('Column Sums:', this.columnSums);
  }
  

  onCalculate() {
    if (this.generatedForm) {
      const formValues = this.generatedForm.value;
      this.rowSums = this.models.map((_, i) =>
        this.months.reduce((sum, _, j) => sum + Number(formValues[`model${i}month${j}`] || 0), 0)
      );
      this.columnSums = this.months.map((_, j) =>
        this.models.reduce((sum, _, i) => sum + Number(formValues[`model${i}month${j}`] || 0), 0)
      );
      this.totalSum = this.rowSums.reduce((sum, current) => sum + current, 0);
      this.salesData.emit({
        salesData: formValues,
        rowSums: this.rowSums,
        columnSums: this.columnSums,
        totalSum: this.totalSum,
        models: this.models,
        months: this.months
      });
    }
  }
}
