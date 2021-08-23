import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'components-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  session: boolean = false;
  @Input() onsession: boolean;
  constructor(private Router: Router, private loginService: UsersService) {
    const sessionx = this.loginService.onSesionIniciada();
    sessionx != null
      ? (this.session = true)
      : console.log('no es diferente de null');
  }

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
}
