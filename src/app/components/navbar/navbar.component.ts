import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { RegisterUserComponent } from '../register-user/register-user.component';

@Component({
  selector: 'components-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  session: boolean = true;
  @Input() onsession: boolean;
  constructor(
    private Router: Router,
    private loginService: UsersService,
    public dialog: MatDialog,
    private PageRoutes: Router
  ) {}

  ngOnInit(): void {}

  navegar(link: string) {
    this.Router.navigate([`/${link}`]);
  }

  SearchMovie(Textmovie: string) {
    Textmovie = Textmovie.trim();
    if (Textmovie.length == 0) {
      return;
    }

    this.Router.navigate(['/search', Textmovie]);
  }

  openDialog() {
    this.dialog.open(RegisterUserComponent, {
      width: '50%',
      height: '47%',
    });
  }

  cerrarSesion() {
    this.loginService.cerrarSesion();
    this.PageRoutes.navigateByUrl('/index');
  }
}
