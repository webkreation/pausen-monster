import styled from "styled-components/native";
import { fontSize } from "../theme/sizes";

export const RedButton = styled.TouchableOpacity`
  background-color: #f09490;
  border-radius: 66px;
  height: 53px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 28px;
  padding: 0 10px;
  width: 100%;
`;

export const RedButtonText = styled.Text`
  color: #ffffff;
  font-family: "Grold-Bold";
  text-align: center;
  font-size: ${fontSize(34)};
`;
