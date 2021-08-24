import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesFavorites } from 'src/app/interfaces/movies.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateMovieComponent implements OnInit {
  movi: MoviesFavorites;
  constructor(
    public dialogRef: MatDialogRef<MoviesFavorites>,
    @Inject(MAT_DIALOG_DATA) public data: { onmovie: MoviesFavorites },
    private movieService: MovieService
  ) {
    this.movi = this.data[0];
  }

  ngOnInit(): void {}

  onSubmit() {
    const { description, _id } = this.movi;

    this.movieService
      .updateMovie({ description, _id })
      .subscribe((Response) => {
        console.log('update', Response);
      });
  }
}
