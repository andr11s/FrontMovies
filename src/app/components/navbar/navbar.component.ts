import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'components-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private Router: Router,
    private loginService: UsersService,
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

  cerrarSesion() {
    this.loginService.cerrarSesion();

    this.PageRoutes.navigateByUrl('/index');
  }
}
