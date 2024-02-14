export default function getSpecial(obj) {
  const arr = [];
  const { special } = obj;
  special.forEach((item) => {
    if (!Object.hasOwnProperty.call(item, 'description')) {
      Object.defineProperty(item, 'description', {
        value: 'Описание недоступно',
        enumerable: true,
      });
    }
    arr.push(item);
  });
  return arr;
}
