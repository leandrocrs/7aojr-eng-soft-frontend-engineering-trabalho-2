export function addHours(date, hours) {
  const hoursToAdd = hours * 60 * 1000;
  date.setTime(date.getTime() + hoursToAdd);

  return date;
}
