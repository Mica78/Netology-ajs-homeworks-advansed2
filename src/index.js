export default function getSpecial(obj) {
  const arr = [];
  const { special } = obj;
  special.forEach((item) => {
    if (!item.description) {
      // eslint-disable-next-line no-param-reassign
      item.description = 'Описание недоступно';
    }
    arr.push(item);
  });
  return arr;
}
