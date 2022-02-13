export const label = (property) => {
  let temp = property
    .split('')
    .reduce((a, b) => (b == b.toUpperCase() ? `${a} ${b}` : a + b));
  return temp[0].toUpperCase() + temp.slice(1);
};

export const mapToSelectItems = (list, text, value) => {
  return (list = list.map((el) => {
    return { text: el[text], value: el[value] };
  }));
};


export const transformDate = (date) => {
  let time = Math.abs(new Date(date) - new Date()) / 1000;
  let what = 'days';
  if (time < 60) {
    what = 'seconds';
  } else if (time < 3600) {
    time /= 60;
    what = 'minutes';
  } else if (time < 216000) {
    time /= 3600;
    what = 'hours';
  }
  return `${time.toFixed(0)} ${what} ago`;
};
