window.onscroll = function() {scrollFunction()};
window.onresize = function() {scrollFunction()};
document.getElementById("header").style.minHeight = 150 - (document.documentElement.scrollTop)  + "px";
document.getElementById("logo").style.width = 30 * 3.3 + "px";
var leftPosition = Math.max(getWidth() - scrollPosition / 5, 0); 
var temp = 0;

// Apply the transformation to the moving element
document.getElementById("headerContainer").style.left = leftPosition + "%";

function scrollFunction() {
  // Get the scroll position
  var scrollPosition = window.scrollY;

  // Calculate the transformation based on the scroll position
  var leftPosition = Math.max(getWidth() - scrollPosition / 5, 0); 

  // Apply the transformation to the moving element
  document.getElementById("headerContainer").style.left = leftPosition + "%";

  x = 30 - (document.documentElement.scrollTop / 5);
  
  if (x > 10) {
    document.getElementById("header").style.minHeight = 150 - (document.documentElement.scrollTop)  + "px";
    document.getElementById("headerContainer").style.fontSize = x+"px";
    document.getElementById("logo").style.width = x * 3.3 + "px";
  } else {
    document.getElementById("headerContainer").style.fontSize = "10px";
    document.getElementById("logo").style.width = "33px";
  }
  temp += 1;
  
  document.getElementById("test").textContent = getHeight();
  temp = 0;
}

function getWidth() {
  var targetElement = document.getElementById("headerContainer");
  var rect = targetElement.getBoundingClientRect();
  var logo = document.getElementById("logo");

  // Calculate the distance from the right side of the screen
  var logoPos = (100 - (100*(rect.width + logo.width -40) / window.innerWidth)) / 2;

  return logoPos;
}

function getHeight() {
  var targetElement = document.getElementById("headerContainer");
  var rect = targetElement.getBoundingClientRect();

  return rect.height;
}