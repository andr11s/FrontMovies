import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass, Userlocal, users } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  user: users;
  userLogin = new UserClass();
  session: boolean = false;
  constructor(private userService: UsersService, private routes: Router) {
    const session = this.userService.onSesionIniciada();
    session == null ? null : this.onSessionReady(session);

    this.userService.loginEvent.subscribe(
      (Response: users) => this.onSesionLogin(Response),
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {}

  OnLogin() {
    this.userService.onCreadaSesion(this.userLogin);
    // this.userService
    //   .SearchUserEmail(this.userLogin.email)
    //   .subscribe((Response: Userlocal) => {
    //     this.user = Response.user;
    //     console.log(Response);

    //   });
  }

  onSessionReady(user: users) {
    this.routes.navigateByUrl('home');
  }

  onSesionLogin(sesion: users) {
    const response = this.userService.onComprobarSesion(sesion);
    response != null
      ? response.subscribe(
          (Response: any) => {
            sessionStorage.setItem('_sesion', JSON.stringify(Response.user));
            this.routes.navigateByUrl('home');
          },
          (error) => {
            console.log('error al iniciar');
          }
        )
      : null;
  }
}
