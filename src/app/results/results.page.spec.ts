import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsPage } from './results.page';
import { IonicModule } from '@ionic/angular';

describe('ResultsPage', () => {
  let component: ResultsPage;
  let fixture: ComponentFixture<ResultsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should process results correctly', () => {
    const mockResults = {
      salesData: {
        model0month0: 10,
        model0month1: 20,
        model1month0: 30,
        model1month1: 40,
      },
      rowSums: [30, 70],
      columnSums: [40, 60],
      totalSum: 100,
      models: [0, 1],
      months: [0, 1],
    };

    component.results = mockResults;
    component.ngOnChanges({
      results: {
        currentValue: mockResults,
        previousValue: undefined,
        firstChange: true,
        isFirstChange: () => true,
      },
    });

    expect(component.processedResults.rowSums).toEqual([30, 70]);
    expect(component.processedResults.columnSums).toEqual([40, 60]);
    expect(component.processedResults.totalSum).toBe(100);
  });
});
