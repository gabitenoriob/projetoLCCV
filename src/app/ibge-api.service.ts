// ibge-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IbgeApiService {
  private baseUrl = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes';

  constructor(private http: HttpClient) {}

  getNameData(name: string): Observable<any> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.get(url);
  }
}
