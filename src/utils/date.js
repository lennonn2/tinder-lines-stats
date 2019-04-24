const twoDigits = num => num < 10 ? `0${num}` : num;

export const dateToString = (date) => {
  const dateObj = new Date(date);

  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return `${dateObj.getFullYear()}/${twoDigits(month)}/${twoDigits(day)} \u00A0 ${twoDigits(hours)}:${twoDigits(minutes)}`;
}