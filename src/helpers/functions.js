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

export function isEmpty(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

export function abbreviateNumber(value) {
  let newValue = value;
  if (value >= 1000) {
    let suffixes = ["", "k", "m", "b", "t"];
    let suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = '';
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
      let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
      if (dotLessShortValue.length <= 2) { break; }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}