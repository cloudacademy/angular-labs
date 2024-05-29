import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TimedLoggerService extends LoggerService {

  constructor() { super()}

  private getUtcDate(){
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const utcDate = today.toUTCString();
    return utcDate;
  }

  override log(msg: unknown) { 
    const date = this.getUtcDate();
    console.log(`${date}: ${msg}`); 
  }
  override error(msg: unknown) { 
    const date = this.getUtcDate();
    console.error(`${date}: ${msg}`); 
  }
  override warn(msg: unknown) { 
    const date = this.getUtcDate();
    console.warn(`${date}: ${msg}`); 
  }
}
