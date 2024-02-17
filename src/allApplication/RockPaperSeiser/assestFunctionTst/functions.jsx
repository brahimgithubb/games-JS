export const testCompVSPaper = (compValue) => {
  if (compValue == "paper") {
    setYouCount(youCount + 0.5);
    setCoupmuterCount(computerCount + 0.5);
  } else {
    if (compValue == "seiser") {
      setCoupmuterCount(computerCount + 1);
    } else {
      setYouCount(youCount + 1);
    }
  }
};
export const testCompVSSeiser = (compValue) => {
  if (compValue == "seiser") {
    return 0.5;
  } else {
    if (compValue == "roock") {
      setCoupmuterCount(computerCount + 1);
    } else {
      setYouCount(youCount + 1);
    }
  }
};
export const testCompVSRoock = (compValue) => {
  if (compValue == "roock") {
    return 0.5;
  } else {
    if (compValue == "paper") {
      setCoupmuterCount(computerCount + 1);
    } else {
      setYouCount(youCount + 1);
    }
  }
};
