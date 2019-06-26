setInterval(() => {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

  if (x >= 453) {
    document.getElementById("navbar-toggle").style = "display: none;";
    document.getElementById("navbarButtons").className = "";
  } else if (!(document.getElementById("navbarButtons").className.indexOf("navbar-collapse") > -1)) {
    console.log("collapse navbar-collapse");
    document.getElementById("navbarButtons").className = "collapse navbar-collapse";
    document.getElementById("navbar-toggle").style = "";
  }
}, 100);
