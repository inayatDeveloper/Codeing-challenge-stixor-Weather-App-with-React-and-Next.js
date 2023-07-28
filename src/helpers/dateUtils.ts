export function getDaysList(): string[] {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daysList = [];
  for (let i = 0; i < 7; i++) {
    daysList.push(days[new Date(Date.now() + (i + 0) * 24 * 60 * 60 * 1000).getDay()]);
  }
  return daysList;
}
