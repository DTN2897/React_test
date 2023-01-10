function hailstone(number) {
  let arr = [number];

  while (number != 1) {
    if (number % 2 != 0) {
      number = number * 3 + 1;
    } else {
      number /= 2;
    }
    arr.push(number);
  }
  console.log(arr);
}
