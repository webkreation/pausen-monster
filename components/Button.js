import React from "react";
import styled from "styled-components/native";
import { fontSize } from "../theme/sizes";

export const Button = styled.TouchableOpacity`
  background-color: #ee5060;
  border-width: 1px;
  border-color: #ee5060;
  border-radius: 26px;
  width: 100%;
  height: 53px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 28px;
  padding: 0 10px;
  opacity: ${props => (props.active ? "1" : "0.5")};
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-family: "Muli-Bold";
  text-align: center;
  font-size: ${fontSize(15)};
`;
