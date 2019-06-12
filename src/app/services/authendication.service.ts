import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthendicationService {

  constructor() { }
  currentUserValue(): boolean {
        return false;
  }
}
