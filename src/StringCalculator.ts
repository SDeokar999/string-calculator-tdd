const add = (input: string) => {
  if (!input) return 0;

  const numberPattern = /-?\d+/g;

  let numberArray: any[] = input.match(numberPattern)?.map(Number) || [];

  // Check for negative numbers
  const negativeNumbers = numberArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  const sum = numberArray.reduce((acc, curr) => acc + curr, 0);

  return sum;
};

export default add;