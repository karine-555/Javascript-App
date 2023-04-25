"use strict";
let numberOfFilms = +prompt(
  "Այսօր քանի՞ ֆիլմ եք դիտել",
  "Խնդրում ենք լրացնել թվերով"
);
while (numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)) {
  let numberOfFilms = +prompt(
    "Այսօր քանի՞ ֆիլմ եք դիտել",
    "Խնդրում ենք լրացնել թվերով"
  );}
const personalMovieDB = {
  count: isNaN(numberOfFilms) ? 0 : numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,};
for (let i = 1; i <= numberOfFilms; i++) {
  let whichFilm = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
  while (whichFilm === "" || whichFilm === null) {
    whichFilm = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");}
  let rateFilm = +prompt(`Ինչքա՞ն եք գնահատում <<${whichFilm}>> ֆիլմը`);
  while (rateFilm === "" || rateFilm === null || isNaN(rateFilm)) {
    rateFilm = +prompt(`Ինչքա՞ն եք գնահատում <<${whichFilm}>> ֆիլմը`);}
  personalMovieDB.movies[whichFilm] = rateFilm;
}
if( personalMovieDB.privat === false) {
  console.log("The database is closed")
}else {
  console.log(personalMovieDB);
}

