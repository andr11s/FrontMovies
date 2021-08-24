import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass, Userlocal, users } from 'src/app/interfaces/user.interface';
import { AlertService } from 'src/app/services/alert.service';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserComponent } from './../../components/register-user/register-user.component';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  user: users;
  userLogin = new UserClass();
  session: boolean = false;
  constructor(
    private userService: UsersService,
    private routes: Router,
    private alertService: AlertService,
    public dialog: MatDialog
  ) {
    this.userService.onSesionIniciada() === null ? null : this.onSessionReady();

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

  onSessionReady() {
    this.routes.navigateByUrl('home');
  }
  openDialog() {
    this.dialog.open(RegisterUserComponent, {
      width: '50%',
      height: '47%',
    });
  }
  onSesionLogin(sesion: users) {
    this.userService
      .onComprobarSesion(sesion)
      .subscribe((Response: Userlocal) => {
        if (Response.error) {
          this.alertService.alertMessage({
            message: Response.message,
            icon: 'warning',
          });
          console.log(Response);
        } else {
          sessionStorage.setItem('_sesion', JSON.stringify(Response.user));
          this.routes.navigateByUrl('home');
        }
      });
  }
}
