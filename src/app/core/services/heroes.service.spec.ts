import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroesService } from './heroes.service';
import { environment } from 'src/environments/environment';
import { HEROBYIDSERVICEMOCK, HEROESSERVICEMOCK } from 'src/test/heroesService.mock';

describe('HeroesService', () => {
  let service: HeroesService;
  let httpTestingController: HttpTestingController;
  let mockHeroId = "1009149"

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService]
    });
    service = TestBed.inject(HeroesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve heroes from the API via GET', () => {
    const mockHeroesResponse = { /* Mock response data */ };

    service.getHeroes().subscribe(heroes => {
      expect(heroes).toEqual(HEROESSERVICEMOCK);
    });

    const req = httpTestingController.expectOne(`${environment.urlBase}?apikey=${environment.publicKey}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockHeroesResponse);
  });

  it('should retrieve a hero by id from the API via GET', () => {
    const mockHeroId = '123';
    const mockHeroResponse = { /* Mock response data */ };

    service.getHeroesById(mockHeroId).subscribe(hero => {
      expect(hero).toEqual(HEROBYIDSERVICEMOCK);
    });

    const req = httpTestingController.expectOne(`${environment.urlBase}/${mockHeroId}?apikey=${environment.publicKey}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockHeroResponse);
  });
});