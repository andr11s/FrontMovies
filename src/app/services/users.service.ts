import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { users } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = environment.API;
  private ContadorPage = 1;
  public cargando: boolean;
  constructor(private httpClient: HttpClient) {}

  get params() {
    return {
      api_key: 'b79aab3ea2da177ab454ca6f90e7cf65',
      language: 'es-ES',
      page: this.ContadorPage.toString(),
    };
  }

  getUser(): Observable<users[]> {
    if (this.cargando) {
      return of([]);
    }

    return this.httpClient
      .get<users[]>(`${this.baseUrl}/users/getUsers`)
      .pipe(map((response) => response));
  }

  SearchUserId(id: string): Observable<users> {
    return this.httpClient
      .get<users>(`${this.baseUrl}/users/getUserid/${id}`)
      .pipe(map((Response) => Response));
  }

  saveUser(query: users): Observable<string> {
    return this.httpClient.post<string>(
      `${this.baseUrl}/users/createUser`,
      query
    );
  }
  updateUser(query: users): Observable<string> {
    return this.httpClient.post<string>(
      `${this.baseUrl}/users/updateUser`,
      query
    );
  }
}
