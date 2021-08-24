export interface moviesApi {
  adult: boolean;
  backdrop_path: string;
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export function movieMappi(params: moviesApi): moviesApi {
  return {
    adult: params.adult,
    backdrop_path: params.backdrop_path,
    id: params.id,
    original_language: params.original_language,
    original_title: params.original_title,
    overview: params.overview,
    popularity: params.popularity,
    poster_path: params.poster_path,
    release_date: params.release_date,
    title: params.title,
    video: params.video,
    vote_average: params.vote_average,
    vote_count: params.vote_count,
  };
}
