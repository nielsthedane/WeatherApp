import { TestBed } from '@angular/core/testing';

import { WeatherreportService } from './weatherreport.service';

describe('WeatherreportserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherreportService = TestBed.get(WeatherreportService);
    expect(service).toBeTruthy();
  });
});
