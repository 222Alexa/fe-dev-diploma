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
const isEvenNumberRangeSeats = (arr) => {
  let evenArr = [];
  let oddArr = [];
  arr.map((item) => {
    return item !== 62 && item % 2 === 0
      ? evenArr.push(item)
      : oddArr.push(item);
  });
  return { evenArr, oddArr };
};
const rangeSeats = (arr) => {
  let total = [];

  arr.map((item, index) => {
    let box = [];
    if (index % 2 === 0) {
      box = [item, arr[index + 1]];
      total.push(box);
    }
    return item;
  });

  return total;
};
export const getSeatsArr = (class_type) => {
  let boxSeatsArr = [];

  let rangeBoxSeatsArr = [];
  let rangeSideSeatsArr = [];
  if (class_type === "first") {
    boxSeatsArr = Array.from({ length: 18 }, (_, index) => index + 1);
    boxSeatsArr.splice(1, 1); //удалить 2(не знаю зачем, но на макете его нет)
    boxSeatsArr.splice(15, 1); //удалить 17(не знаю зачем, но на макете его нет)
    rangeBoxSeatsArr = rangeSeats(boxSeatsArr);
    return rangeBoxSeatsArr;
  } else if (class_type === "second") {
    boxSeatsArr = Array.from({ length: 32 }, (_, index) => index + 1);

    rangeBoxSeatsArr = rangeSeats(boxSeatsArr);

    return rangeBoxSeatsArr;
  } else if (class_type === "third") {
    boxSeatsArr = Array.from({ length: 32 }, (_, index) => index + 1);
    let sideSeatsArr = (start, stop, step) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      );

    rangeBoxSeatsArr = rangeSeats(boxSeatsArr);
    rangeSideSeatsArr = rangeSeats(sideSeatsArr(33, 48, 1));

    return [rangeBoxSeatsArr, rangeSideSeatsArr];
  } else if (class_type === "fourth") {
    boxSeatsArr = Array.from({ length: 62 }, (_, index) => index + 1);
    let sector2 = boxSeatsArr.splice(32, 31);
    let sector1 = boxSeatsArr;

    const sideRight = isEvenNumberRangeSeats(sector1);
    const sideLeft = isEvenNumberRangeSeats(sector2);
    return [sideRight, sideLeft];
  }
};

export const getClassName = (num, dataBase, state) => {
  const item = dataBase.seats.find((item) => {
    return item.index === Number(num) && item.available === true;
  });

  let className = "";

  if (item) {
    const filteredArr = state.filter(
      (item) => item.coach_id === dataBase.coach._id
    );

    const seatNum = item.index;

    if (filteredArr.length > 0)
      filteredArr.find((item) => {
        return item.seat.seats === seatNum
          ? (className = " utils-wagon_button_selected")
          : (className = "");
      });
  } else {
    className = " occupied_seat";
  }
  return className;
};

export const getDisabled = (num, dataBase, stateData, type) => {

  let itemBase = dataBase.find((item) => {
    return item.index === Number(num) && item.available === true;
  });

  let itemState;

  if (type.type === "adult") {
    itemState = stateData[1].seats.find((item) => {
      return Number(item.seats) === num;
    });
  } else if (type.type === "child") {
    itemState = stateData[0].seats.find((item) => {
      return Number(item.seats) === num;
    });
  } else if (type.type === "child-no-seats") {
    const allTypesArr = stateData[0].seats.concat(stateData[1].seats);
    itemState = allTypesArr.find((item) => {
      return Number(item.seats) === num;
    });
    
    itemBase = false;
  }


  return !itemBase || itemState ? true : false;
};

export const getTotalPrice = (arr) => {
  let result = arr
    .map((item) => item.price)
    .reduce((sum, current) => Number(sum) + Number(current), 0);

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
      price: getTotalPrice(item.seats),
    };

    if (elem.type === "adult") {
      elem.text = elem.count > 1 ? "Взрослых" : "Взрослый";
    } else if (elem.type === "child") {
      elem.text = elem.count > 1 ? "Детей" : "Ребёнок";
    } else if (elem.type === "child-no-seats") {
      elem.text = elem.count > 0 ? "Детских без места" : "";
    }

    return elem;
  });

  return template;
};
