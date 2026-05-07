"use strict";

const arrGroups = [
  "FE2021-5",
  "Fe2020-2",
  "FD2021",
  "fD2022-1",
  "FE2020-3",
  "FD2020/2",
  "fe2021-3",
  "FD2020$5",
  "FE2008-52",
  "FU2008-3",
  "Fm2008-23",
  "FM2022-1",
];

function checkGroupName(groups) {
  const regExp = /^(FD|FE|FM)20\d{2}(-\d+)?$/i;
  let str = "";

  if (groups.length === 0) {
    throw Error("missing elements");
  }

  for (let i = 0; i < groups.length; i++) {
    if (regExp.test(groups[i])) {
      str += `Success: ${groups[i]}\n`;
    } else {
      str += `Error: ${groups[i]}\n`;
    }
  }
  return str;
}

console.log(checkGroupName(arrGroups));
