// function currencyAddition(float1, float2) {
//   return (float1 + float2).toFixed(2);
// }

// console.log(currencyAddition(1.221, 2.346));

const today = new Date();
const birthday = new Date("1985-9-23");

let years = today.getFullYear() - birthday.getFullYear();

let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();

if (days < 0) {
  months--;
  const currentMonth = new Date(
    `${today.getFullYear()}-${today.getMonth() + 1}-1`
  );

  const previousMonth =
    months == 0
      ? new Date(`${today.getFullYear() - 1}-12-1`)
      : new Date(`${today.getFullYear()}-${today.getMonth()}-1`);

  const diffInDays =
    (currentMonth.getTime() - previousMonth.getTime()) / (1000 * 60 * 60 * 24);
  days = today.getDate() - birthday.getDate() + diffInDays;
}

if (months < 0) {
  years--;
  months += 12;
}

console.log(`${years} ${months} ${days}`);
