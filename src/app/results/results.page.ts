import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnChanges {
  @Input() results: any;
  processedResults: any = {
    salesData: {},
    rowSums: [],
    columnSums: [],
    totalSum: 0,
    models: [],
    months: []
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.results) {
      this.processResults();
    }
  }

  processResults() {
    if (!this.results) return;

    const { salesData, rowSums, columnSums, totalSum, models, months } = this.results;
    this.processedResults = {
      salesData: salesData || {},
      rowSums: rowSums || [],
      columnSums: columnSums || [],
      totalSum: totalSum || 0,
      models: models || [],
      months: months || []
    };
  }

  getSalesData(modelIndex: number, monthIndex: number): number {
    return this.processedResults.salesData[`model${modelIndex}month${monthIndex}`] || 0;
  }
}
