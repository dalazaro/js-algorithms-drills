function maxContigSubarray(arr) {
  var greatestSum = [];

  for (i = 0; i <= arr.length; i++) {
    var sum1 = arr[i] + arr[i + 1];
    var sum2 = arr[i + 1] + arr[i + 2];

    greatestSum.push(sum1);

    if (sum2 > sum1){
      greatestSum.pop();
      greatestSum.push(sum2);
    }
  };
}

testArr1 = [4,7,-1,-12,7];
testArr2 = [0,8,0,2,3];
testArr3 = [-1,5,66,7,-8,-22,4];
testArr4 = [-2,-3,4,1,-1,-5,4];

console.log(maxContigSubarray(testArr1));
console.log(maxContigSubarray(testArr2));
console.log(maxContigSubarray(testArr3));
console.log(maxContigSubarray(testArr4));
