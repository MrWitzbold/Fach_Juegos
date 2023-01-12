var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})
document.getElementsByClassName("navbar-nav")[0].innerHTML += `
<li class="nav-item">
<h1 class="fach_title">Fach Juegos!&nbsp-&nbsp</h1>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Games</a>
</li>
<li class="nav-item">
<a class="nav-link" href="about.html">About</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Contact</a>
</li>
`