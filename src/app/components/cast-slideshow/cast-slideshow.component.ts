import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast, MovieCredit } from 'src/app/interfaces/movie-credit';
import Swiper from 'swiper';

@Component({
  selector: 'components-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css'],
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {
  @Input() MCast: Cast[];
  swipper: Swiper;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.MCast);
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,
      loop: true,
    });

    this.swipper = swiper;
  }
}
