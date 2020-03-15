module.exports = function countCats(array) {
  return array.reduce((acc, item) => {
    let counter = 0;
    item.forEach(element => {
      if (element === '^^') {
        counter += 1;
      }
    })
    return acc + counter;
  }, 0)
};
