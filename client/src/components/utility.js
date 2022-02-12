export const label = (property) => {
  let temp = property
    .split('')
    .reduce((a, b) => (b == b.toUpperCase() ? `${a} ${b}` : a + b));
  return temp[0].toUpperCase() + temp.slice(1);
};

export const mapToSelectItems = (list, text, value) => {
  return list = list.map((el) => {
    return { text: el[text], value: el[value] };
  });
};