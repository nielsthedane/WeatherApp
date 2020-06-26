import { TestBed } from '@angular/core/testing';

import { WeatherreportserviceService } from './weatherreportservice.service';

describe('WeatherreportserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherreportserviceService = TestBed.get(WeatherreportserviceService);
    expect(service).toBeTruthy();
  });
});
