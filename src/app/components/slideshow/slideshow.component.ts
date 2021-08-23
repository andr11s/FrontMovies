import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';
@Component({
  selector: 'components-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];
  swipper: Swiper;

  constructor() {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    });

    this.swipper = swiper;
  }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  onClickPrev() {
    this.swipper.slidePrev();
  }

  onClickNext() {
    this.swipper.slideNext();
  }
}
