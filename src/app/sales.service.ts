import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  calculateSums(salesData: any, models: number[], months: number[]): any {
    const rowSums = models.map((_, i) =>
      months.reduce((sum, _, j) => sum + Number(salesData[`model${i}month${j}`] || 0), 0)
    );
    const columnSums = months.map((_, j) =>
      models.reduce((sum, _, i) => sum + Number(salesData[`model${i}month${j}`] || 0), 0)
    );
    const totalSum = rowSums.reduce((sum, current) => sum + current, 0);

    return { rowSums, columnSums, totalSum };
  }
}
