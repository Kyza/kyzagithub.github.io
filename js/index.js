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

  // Make sure all notification images have alts.
  var cr8 = document.getElementsByTagName("crate")[0].childNodes[0].shadowRoot;
  var images = cr8.querySelector(".notifications").querySelectorAll("img");
  for (var i = 0; i < images.length; i++) {
    if (images[i].alt.toString().length < 1) {
      images[i].alt = "image";
    }
  }
  // Make sure the iframe has a title.
  cr8.querySelector("iframe").title = "DisWeb Crate";
}, 100);
