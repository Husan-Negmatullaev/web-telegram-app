export function removeObject(arr, key) {
  if (arr.length > 0) {
    let deletItems = [];

    const newArr = JSON.parse(JSON.stringify(arr))
      .map(item => {
        deletItems.push(item[key])
        delete item[key];
        return item;
      });

    return [
      newArr,
      ...deletItems
    ];
  } else {
    console.log("Array are empty!!!");
  };
}

export function getDigFormat(item) {
  return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

export function getDigFromString(item) {
  return parseInt(item.replace(/[^\d]/g, ''))
}