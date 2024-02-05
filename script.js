window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Get the scroll position
  var scrollPosition = window.scrollY;

  // Calculate the transformation based on the scroll position
  if (getDistanceFromRight >= getDistanceFromLeft) {
    var leftPosition = Math.max(35 - scrollPosition / 5, 0); 
  
    // Apply the transformation to the moving element
    document.getElementById("headerContainer").style.left = leftPosition + "%";
  }
  x = 30 - (document.documentElement.scrollTop / 5);
  if (x > 10) {
    document.getElementById("headerContainer").style.fontSize = x+"px";
    document.getElementById("logo").style.width = x * 3.3 + "px";
  } else {
    document.getElementById("headerContainer").style.fontSize = "10px";
    document.getElementById("logo").style.width = "33px";
  }
}

function getDistanceFromRight() {
  var targetElement = document.getElementById("headerContainer");
  var rect = targetElement.getBoundingClientRect();

  // Calculate the distance from the right side of the screen
  var distanceFromRight = window.innerWidth - rect.right;

  return distanceFromRight;
}

function getDistanceFromLeft() {
  var targetElement = document.getElementById("headerContainer");
  var rect = targetElement.getBoundingClientRect();

  // Calculate the distance from the right side of the screen
  var distanceFromLeft = rect.left;

  return distanceFromLeft;
}