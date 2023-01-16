var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

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