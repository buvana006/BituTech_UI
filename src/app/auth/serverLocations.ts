import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class serverLocations {
  apiServerAddress: any;
  constructor() {
    if (window.location.hostname === 'localhost') {
      //Local
       this.apiServerAddress = 'http://localhost:8080/';
       
    } else if (window.location.hostname === '192.168.5.100') {
      // Server Added Buvana
      this.apiServerAddress = 'http://192.168.5.100:8080/bitutech/';
      
    } 
  }
}
export const VARIABLE_SERVICE_PROVIDER = [
  serverLocations
];
