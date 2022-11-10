import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SERVICES } from '../../mocks/mock-services';
import { Service } from '../../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() {}
  getServices(): Observable<Service[]> {
    console.log("Go away")
    const service = of(SERVICES)
    return service
  }
}
