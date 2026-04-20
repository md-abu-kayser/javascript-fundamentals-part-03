let i = 1;
let sum = 0;

while (true) {
  sum += i;

  if (sum >= 100) {
    console.log("Sum reached:", sum);
    break;
  }

  i++;
}
