for (let i = 1; i <= 100; i++) {
  const root = Math.sqrt(i);

  if (Number.isInteger(root) && i !== 1) {
    console.log("First square number found:", i);
    break;
  }

  console.log(i);
}
