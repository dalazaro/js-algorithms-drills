function distanceBetweenCircles(circle1, circle2) {

  //changeX = (x2-x1)^2
  var changeX = Math.pow(circle2.center.x - circle1.center.x, 2);

  //changeY = (y2-y1)^2
  var changeY = Math.pow(circle2.center.y - circle1.center.y, 2);

  //distance = square root of (changeX + changeY)
  var distanceBetweenPoints = Math.sqrt(changeX + changeY);

  //distance between circles = distance - (circle 1 radius + circle 2 radius)
  var distance = distanceBetweenPoints - (circle1.radius + circle2.radius);

  if (distanceBetweenPoints <= 0) {
    distance = 0;
  }

}

var circle1 = {
  center: {
    x: 3,
    y: 4
  },
  radius: 2
};

var circle2 = {
  center: {
    x: 14,
    y: 11,
  },
  radius: 8
};

var circle3 = {
  center: {
    x: 2,
    y: 2,
  },
  radius: 5
};

console.log(distanceBetweenCircles(circle1, circle2)); //should be 3.0384048104052983
console.log(distanceBetweenCircles(circle1, circle3)); //should be 0
console.log(distanceBetweenCircles(circle2, circle3)); //should be 2
