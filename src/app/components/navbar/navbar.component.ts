import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'components-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private Router: Router) {}

  ngOnInit(): void {}

  navegar(link: string) {
    this.Router.navigate([`/${link}`]);
  }

  SearchMovie(Textmovie: string) {
    console.log(Textmovie);
    Textmovie = Textmovie.trim();

    if (Textmovie.length == 0) {
      return;
    }

    this.Router.navigate(['/search', Textmovie]);
  }
}
