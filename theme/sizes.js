import { Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const baseSize = 750;

export function fontSize(size) {
  // console.log(deviceHeight);
  // console.log(size);
  // console.log(`${Math.round((deviceHeight / baseSize) * size)}px`);
  // console.log("--------------");

  if (size > 812) return `${size + 4}px`;
  if (size > 736) return `${size + 2}px`;
  if (size > 568) return `${size + 1}px`;
  return `${size}px`;
}

export function lineHeight(size) {
  //console.log(`${Math.round(deviceHeight/baseSize*size)}px`);
  if (size > 812) return `${size + 4}px`;
  if (size > 736) return `${size + 2}px`;
  if (size > 568) return `${size + 1}px`;
  return `${size}px`;
}
