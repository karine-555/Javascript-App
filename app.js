"use strict";
let numberOfFilms = +prompt(
  "Այսօր քանի՞ ֆիլմ եք դիտել",
  "Խնդրում ենք լրացնել թվերով"
);
while (numberOfFilms === "" || numberOfFilms === 0 || isNaN(numberOfFilms)) {
   numberOfFilms = +prompt(
    "Այսօր քանի՞ ֆիլմ եք դիտել",
    "Խնդրում ենք լրացնել թվերով"
  );}
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,};
for (let i = 1; i <= numberOfFilms; i++) {
  let whichFilm = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
  while (whichFilm === "" || whichFilm === null) {
    whichFilm = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");}
  let rateFilm = +prompt(`Ինչքա՞ն եք գնահատում <<${whichFilm}>> ֆիլմը`);
  while (rateFilm === "" || rateFilm === 0 || isNaN(rateFilm)) {
    rateFilm = +prompt(`Ինչքա՞ն եք գնահատում <<${whichFilm}>> ֆիլմը`);}
  personalMovieDB.movies[whichFilm] = rateFilm;
}
if( personalMovieDB.privat) {
  console.log("The database is closed")
}else {
  console.log(personalMovieDB);
}

if(numberOfFilms <= 3) {
  console.log ("You are classic onlooker")
}else if(numberOfFilms >= 3 && numberOfFilms <= 6){
  console.log ("You are lover of films")
}else {
  console.log("You are kinoman")
}

