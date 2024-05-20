import { TestBed } from '@angular/core/testing';
import { SalesService } from './sales.service';

describe('SalesService', () => {
  let service: SalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate sums correctly', () => {
    const salesData = {
      model0month0: 10,
      model0month1: 20,
      model1month0: 30,
      model1month1: 40,
    };
    const models = [0, 1];
    const months = [0, 1];

    const result = service.calculateSums(salesData, models, months);

    expect(result.rowSums).toEqual([30, 70]);
    expect(result.columnSums).toEqual([40, 60]);
    expect(result.totalSum).toEqual(100);
  });
});
