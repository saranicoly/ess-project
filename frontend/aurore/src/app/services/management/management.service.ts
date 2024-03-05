import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManegementService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<any>(`http://localhost:8000/accommodation/list`);
  }
}
