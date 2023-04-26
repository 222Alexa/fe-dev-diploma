export const getArrWagons = (arr) => {
  const copyArr = [];
  arr.map((item) => {
    //if (arr.length === 1) {
    if (arr[0].coach.class_type === "first") {
      copyArr[0] = { ...arr[0], index: "02" };
    }
    if (arr[0].coach.class_type === "second") {
      copyArr[0] = { ...arr[0], index: "07" };
    }
    if (arr[0].coach.class_type === "third") {
      copyArr[0] = { ...arr[0], index: "12" };
    }
    if (arr[0].coach.class_type === "fourth") {
      copyArr[0] = { ...arr[0], index: "20" };
    }


    //Когда-нибудь потом сделаю на несколько вагонов одного класса
    //сейчас они сбивают и отвлекают от насущного RTQ
    /*} else if (arr.length === 2) {
      if (arr[0].coach.class_type === "first") {
        copyArr[0] = { ...arr[0], index: "02" };
        copyArr[1] = { ...arr[1], index: "05" };
      } else if (arr[0].coach.class_type === "second") {
        copyArr[0] = { ...arr[0], index: "07" };
        copyArr[1] = { ...arr[1], index: "09" };
      } else if (arr[0].coach.class_type === "third") {
        copyArr[0] = { ...arr[0], index: "10" };
        copyArr[1] = { ...arr[1], index: "12" };
      } else if (arr[0].coach.class_type === "fourth") {
        copyArr[0] = { ...arr[0], index: "20" };
        copyArr[1] = { ...arr[1], index: "21" };
      }
    } else if (arr.length === 3) {
      if (arr[0].coach.class_type === "second") {
        copyArr[0] = { ...arr[0], index: "07" };
        copyArr[1] = { ...arr[1], index: "09" };
      } else if (arr[0].coach.class_type === "third") {
        copyArr[0] = { ...arr[0], index: "10" };
        copyArr[1] = { ...arr[1], index: "12" };
        copyArr[2] = { ...arr[2], index: "15" };
      } else if (arr[0].coach.class_type === "fourth") {
        copyArr[0] = { ...arr[0], index: "20" };
        copyArr[1] = { ...arr[1], index: "21" };
        copyArr[2] = { ...arr[2], index: "22" };
      }
    } else if (arr.length === 4) {
      if (arr[0].coach.class_type === "fourth") {
        copyArr[0] = { ...arr[0], index: "20" };
        copyArr[1] = { ...arr[1], index: "21" };
        copyArr[2] = { ...arr[2], index: "22" };
        copyArr[3] = { ...arr[3], index: "25" };
      }
    }
   */ return item;
  });

  return copyArr;
};

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
