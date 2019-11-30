const isDifferentDay = (date1: string, date2: string): boolean => {
  return date1.substr(0, 10) !== date2.substr(0, 10);
};

export default isDifferentDay;
