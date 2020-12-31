import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  private header: any = {
    notification: new BehaviorSubject([]),
    navLeft: new BehaviorSubject(false)
  };

  private tmpConfiPage = new BehaviorSubject(null);

  constructor() { }

  setHederNotification(data: string[] = []): void {
    this.header.notification.next(data);
  }

  getHederNotification(): Observable<any> {
    return this.header.notification.asObservable();
  }

  setToggleNavLeft(toggle: boolean) {
    this.header.navLeft.next(toggle);
  }
  getToggleNavLeft(): Observable<boolean> {
    return this.header.navLeft.asObservable();
  }
  setCongigutationPage(title: string, isRestricted: boolean): void {
    this.tmpConfiPage.next({ title, isRestricted });
  }

  getCongigutationPage(): Observable<any> {
    return this.tmpConfiPage.asObservable();
  }
}
