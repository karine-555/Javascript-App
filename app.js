"use strict";

const numberOfFilms = +prompt(
  "Այսօր քանի՞ ֆիլմ եք դիտել",
  "Խնդրում ենք լրացնել թվերով"
);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", ""),
      b = +prompt("Ինչքա՞ն եք գնահատում այդ ֆիլմը"),
      c = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", ""),
      d = +prompt("Ինչքա՞ն եք գնահատում այդ ֆիլմը");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

