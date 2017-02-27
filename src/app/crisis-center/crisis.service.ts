import { Crisis } from './crisis';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CRISES } from './mock-crisises';

@Injectable()
export class CrisisService {
  getCrises(): Promise<Crisis[]> {
    return Promise.resolve(CRISES);
  }

  getCrisis(id: number): Promise<Crisis> {
    return this.getCrises().then(crises => {
      var result = crises.filter(c => c.id == id);
      return (result && result.length > 0) ? result[0] : null;
    });
  }
}