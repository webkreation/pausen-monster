import React from "react";
import { withNavigation } from "@react-navigation/compat";

import styled from "styled-components/native";
import { fontSize } from "../theme/sizes";

function NextButton(props) {
  if (props.inactive) {
    return (
      <NextButtonStyled disabled={true} {...props}>
        <NextButtonTextStyled {...props}>
          {props.nextTitle}
        </NextButtonTextStyled>
      </NextButtonStyled>
    );
  }
  if (!props.navigateTo) {
    return (
      <NextButtonStyled {...props}>
        <NextButtonTextStyled {...props}>
          {props.nextTitle}
        </NextButtonTextStyled>
      </NextButtonStyled>
    );
  } else {
    return (
      <NextButtonStyled
        {...props}
        onPress={() =>
          props.navigation.navigate(
            props.navigateTo,
            props.navigationParams ? props.navigationParams : {}
          )
        }
      >
        <NextButtonTextStyled {...props}>
          {props.nextTitle}
        </NextButtonTextStyled>
      </NextButtonStyled>
    );
  }
}

export const NextButtonStyled = styled.TouchableOpacity`
  background-color: ${props =>
    props.white ? "#FFFFFF" : props.disabled ? "#F7A8B0" : "#5F7195"};
  border-color: ${props =>
    props.white ? "#EE5060" : props.disabled ? "#F7A8B0" : "#5F7195"};
  border-radius: 26px;
  border-width: 1px;
  width: 100%;
  height: ${props => (props.lowButton ? "27px" : "53px")};
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const NextButtonTextStyled = styled.Text`
  font-size: ${fontSize(15)};
  /* font-family: "Muli-Regular"; */
  color: ${props =>
    props.white ? "#EE5060" : props.disabled ? "#F7A8B0" : "#FFFFFF"};
  text-align: center;
`;

export default withNavigation(NextButton);
