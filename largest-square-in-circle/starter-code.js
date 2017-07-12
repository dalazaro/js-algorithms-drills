function largestSquareAreaInCircle(r) {
  diameter = 2 * r;
  side = diameter / 2;
  areaSquare = Math.pow(side, 2);
}

console.log(largestSquareAreaInCircle(5)); //50
console.log(largestSquareAreaInCircle(7)); //98
console.log(largestSquareAreaInCircle(12)); //288
