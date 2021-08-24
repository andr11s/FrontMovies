import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  responseUser,
  UserClass,
  Userlocal,
  users,
} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = environment.API;
  public loginEvent = new EventEmitter<users>();

  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<users[]> {
    return this.httpClient
      .get<users[]>(`${this.baseUrl}/users/getUsers`)
      .pipe(map((response) => response));
  }

  SearchUserId(id: string): Observable<users> {
    return this.httpClient
      .get<users>(`${this.baseUrl}/users/getUserid/${id}`)
      .pipe(map((Response) => Response));
  }

  SearchUserEmail(email: string): Observable<Userlocal> {
    return this.httpClient
      .get<Userlocal>(`${this.baseUrl}/users/getUserEmail/${email}`)
      .pipe(map((Response) => Response));
  }

  saveUser(query: UserClass): Observable<responseUser> {
    return this.httpClient
      .post<responseUser>(`${this.baseUrl}/users/createUser`, query)
      .pipe(map((response) => response));
  }
  updateUser(query: users): Observable<responseUser> {
    return this.httpClient.post<responseUser>(
      `${this.baseUrl}/users/updateUser`,
      query
    );
  }

  public onCreadaSesion(login: users) {
    this.sesionValida(login) ? this.loginEvent.emit(login) : null;
  }

  public onComprobarSesion(login: users) {
    return this.sesionValida(login) ? this.SearchUserEmail(login.email) : null;
  }

  public sesionValida(login: users) {
    return login != null && login.email != '' && login.email != null;
  }

  onSesionIniciada(): users {
    let sesion = sessionStorage.getItem('_sesion');
    return sesion === null ? null : <users>JSON.parse(sesion);
  }

  cerrarSesion() {
    sessionStorage.clear();
  }
}
