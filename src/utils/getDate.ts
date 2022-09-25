const getDate = (date: number): [number, string] => {
  const minutes = Math.floor(date / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks) return [weeks, "week"];
  if (days) return [days, "day"];
  if (hours) return [hours, "hour"];
  if (minutes) return [minutes, "m"];

  return [0, "none"];
};

export default getDate;
