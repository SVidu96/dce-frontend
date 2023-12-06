import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { MontyHallService } from "./monty-hall.service"
import { HttpClient } from "@angular/common/http";

describe('Monty Hall Service', () => {
  let montyHallService: MontyHallService;
  let http: HttpClient;
  let httpController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MontyHallService]
    });

    montyHallService = TestBed.inject(MontyHallService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  
  })

  it('service created', () => {
    expect(montyHallService).toBeDefined();
  });

});