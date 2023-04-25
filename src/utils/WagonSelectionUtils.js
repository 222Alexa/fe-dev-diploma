export const getDisabled = (num, dataBase, stateData, type) => {
  let itemBase = dataBase.find((item) => {
    return item.index === Number(num) && item.available === true;
  });

  let itemState;

  if (type.type === "adult") {
    itemState = stateData[1].seats.find((item) => {
      return Number(item) === num;
    });
  } else if (type.type === "child") {
    itemState = stateData[0].seats.find((item) => {
      return Number(item) === num;
    });
  } else if (type.type === "child-no-seats") {
    const allTypesArr = stateData[0].seats.concat(stateData[1].seats);
    itemState = allTypesArr.find((item) => {
      return Number(item) === num;
    });
    itemBase = false;
  }

  return !itemBase || itemState ? true : false;
};

export const getTotalPrice = (arr) => {
  let price = arr.map((item) => {
    let priceItem = item.count * item.price;
    return priceItem;
  });
  let result = price.reduce((sum, current) => sum + current, 0);
  return result;
};

export const getValidDataPass = (data) => {
  const arr = data.filter((item) => {
    return (item = item.count !== 0);
  });
  return arr;
};
export const getDataPassTemplate = (data) => {
  const arr = getValidDataPass(data);
  let template = arr.map((item) => {
    let elem = {
      type: item.type,
      count: item.count,
      price: item.count * item.price,
    };
    if (elem.type === "adult") {
      elem.text = elem.count > 1 ? "Взрослых" : "Взрослый";
    } else if (elem.type === "child") {
      elem.text = elem.count > 1 ? "Детей" : "Ребёнок";
    }

    return elem;
  });

  return template;
};

