var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

class games {
    constructor(games_list) {
      this.victorsnightmares = '' +
      '<div class="game">' + 
      '<div class="game_title">' + 
      '<p style="font-size: 17px">Victor\'s nightmares 1</p>' + 
      '</div>' + 
      '<a href="../Fach_Juegos/games/victorsnightmares/victorsnightmares.html"><img width="200px" height="200px" src="assets/victor_nightmares1.png"></img></a>' + 
      '</div>'

      this.victor_nightmares2 = '' +
      '<div class="game">' + 
      '<div class="game_title">' + 
      '<p style="font-size: 17px">Victor\'s nightmares 2</p>' + 
      '</div>' + 
      '<a href="../Fach_Juegos/games/victorsnightmares2/victorsnightmares2.html"><img width="200px" height="200px" src="assets/victor_nightmares2.png"></img></a>' + 
      '</div>'

      this.victor_nightmares3 = '' +
      '<div class="game">' + 
      '<div class="game_title">' + 
      '<p style="font-size: 17px">Victor\'s nightmares 3</p>' + 
      '</div>' + 
      '<a href="../Fach_Juegos/games/victorsnightmares3/victorsnightmares3.html"><img width="200px" height="200px" src="assets/victor_nightmares3.png"></img></a>' + 
      '</div>'

      this.victor_nightmares5 = '' +
      '<div class="game">' + 
      '<div class="game_title">' + 
      '<p style="font-size: 17px">Victor\'s nightmares 5</p>' + 
      '</div>' + 
      '<a href="../Fach_Juegos/games/victorsnightmares5/victorsnightmares5.html"><img width="200px" height="200px" src="assets/victor_nightmares5.png"></img></a>' + 
      '</div>'

      this.kick_buttowski = '' +
      '<div class="game">' + 
      '<div class="game_title">' + 
      '<p style="font-size: 17px">Kick Buttowski</p>' + 
      '</div>' + 
      '<a href="../Fach_Juegos/games/kickbuttowski/kickbuttowski.html"><img width="200px" height="200px" src="assets/kickbuttowski.png"></img></a>' + 
      '</div>'

      this.thirteen_days_in_hell = '' +
      '<div class="game">' + 
      '<div class="game_title">' + 
      '<p style="font-size: 17px">13 days in hell</p>' + 
      '</div>' + 
      '<a href="../Fach_Juegos/games/thirteen_days_in_hell/thirteen_days_in_hell.html"><img width="200px" height="200px" src="assets/thirteen-days-in-hell.png"></img></a>' + 
      '</div>'

      this.bloons_td = '' +
      '<div class="game">' + 
      '<div class="game_title">' + 
      '<p style="font-size: 17px">Bloons TD</p>' + 
      '</div>' + 
      '<a href="../Fach_Juegos/games/bloons_td/bloons_td.html"><img width="200px" height="200px" src="assets/bloons_td.png"></img></a>' + 
      '</div>'

      this.pokemon_ruby = '' +
      '<div class="game">' + 
      '<div class="game_title">' + 
      '<p style="font-size: 17px">Pokemon Ruby</p>' + 
      '</div>' + 
      '<a href="../Fach_Juegos/games/pokemon_ruby/pokemon_ruby.html"><img width="200px" height="200px" src="assets/pokemon_ruby.png"></img></a>' + 
      '</div>'

       this.games_list = [this.victorsnightmares, this.victor_nightmares2, this.victor_nightmares3, this.victor_nightmares5, this.kick_buttowski, this.thirteen_days_in_hell, this.bloons_td, this.pokemon_ruby]
    }
  }

  document.getElementById('navigationbar').innerHTML += '' +
  '<img class="navbar-brand" src="assets/logo.png" width="120" height="120"></img>' +
  '            <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">' + 
  '                <span class="navbar-toggler-icon"></span>' + 
  '            </button>' + 
  '            <div class="collapse navbar-collapse" id="main-navigation">' + 
  '                <ul class="navbar-nav">' + 
  '                    <li class="nav-item">' + 
  '                        <h1 class="fach_title">Fach Juegos!&nbsp-&nbsp</h1>' + 
  '                    </li>' + 
  '                    <li class="nav-item">' + 
  '                        <a class="nav-link" href="#">Home</a>' + 
  '                    </li>' + 
  
  '                    <li class="nav-item">' + 
  '                        <a class="nav-link" href="#">Games</a>' + 
  '                    </li>' + 
  '                    <li class="nav-item">' + 
  '                        <a class="nav-link" href="pages/about.html">About</a>' + 
  '                    </li>' + 
  '                    <li class="nav-item">' + 
  '                        <a class="nav-link" href="#">Contact</a>' + 
  '                    </li>' + 
  '                </ul>' + 
  '            </div>'

let games_list = new games().games_list

for (let i = 0; i < 8; i++) {
  document.getElementById("games_container").innerHTML += games_list[i]
}