// Code for the navigation bars for larger and smaller screen //

function openMenu() {
    document.getElementById("menu-2").style.display = "block";
    document.getElementById("menu-1").style.display = "none";
    document.getElementById("nav-container-sidebar").style.display = "block";
}
function closeMenu()  {
    document.getElementById("menu-1").style.display = "block";
    document.getElementById("menu-2").style.display = " none ";
    document.getElementById("nav-container-sidebar").style.display = "none";
}