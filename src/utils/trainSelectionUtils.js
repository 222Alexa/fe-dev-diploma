import { format, intervalToDuration } from "date-fns";

export const getDuration = (start, end) => {
  let duration = { hours: 0, minutes: 0 };
  const result = intervalToDuration({
    start: new Date(start * 1000),
    end: new Date(end * 1000),
  });
  duration.hours =
    result.days > 0 ? result.hours + result.days * 24 : result.hours;
  console.log();
  duration.minutes =
    result.minutes < 10 ? "0" + result.minutes : result.minutes;
  return duration;
};
export const formattedPrice = (number) => {
  const data = number.toString().split("");
  return data
    .reverse()
    .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
    .reverse()
    .join("");
};
export const dateFormatted = (date) => {
  return !date ? null : format(new Date(date), "yyyy-MM-dd");
};
const getPunct = (string) => {
  const arrText = [...string];
  if (arrText.includes(" ")) {
    return " ";
  } else if (arrText.includes("-")) {
    return "-";
  } else if (arrText.includes("(")) {
    return " (";
  } else {
    return false;
  }
};

export const capitalizeFirstLetter = (string) => {
  let punct = getPunct(string);

  const words = string.split(punct);
  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(punct);
};

export const filteredSeats = (arr) => {
  return arr.filter((item) => item.available === true);
};

export const findWagon = (arr, value) => {
  //console.log(arr, value, 'findWagon');
  return arr.find((item) => item.coach.class_type === value);
};
