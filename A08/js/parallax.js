function castParallax() {
  // Threshold and factor for opacity (optional, not used directly here)
  var opThresh = 350;
  var opFactor = 750;

  // Add scroll event listener
  window.addEventListener("scroll", function () {
    var top = window.pageYOffset;

    var layers = document.getElementsByClassName("parallax");
    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var speed = layer.getAttribute("data-speed");
      var yPos = -(top * speed / 100);
      layer.style.transform = "translate3d(0px, " + yPos + "px, 0px)";
    }
  });
}

function dispelParallax() {
  // Fallback for unsupported platforms (e.g. mobile)
  document.getElementById("nonparallax").style.display = "block";
  document.getElementById("parallax").style.display = "none";
}

function castSmoothScroll() {
  // Optional smooth scroll with jQuery plugin (if used)
  if (typeof $.srSmoothscroll === "function") {
    $.srSmoothscroll({
      step: 80,
      speed: 300,
      ease: "linear"
    });
  }
}

function startSite() {
  var platform = navigator.platform.toLowerCase();

  if (platform.includes("ipad") || platform.includes("iphone")) {
    dispelParallax();
  } else {
    castParallax();

    // Optional: enable smooth scroll only for WebKit browsers
    if (typeof $.browser !== "undefined" && $.browser.webkit) {
      castSmoothScroll();
    }
  }
}

// Wait for DOM to be ready before executing
window.onload = startSite;
