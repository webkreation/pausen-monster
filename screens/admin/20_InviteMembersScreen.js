import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import ViewContainer from "../../components/ViewContainer";
import ContentContainer from "../../components/ContentContainer";
import { RedButton, RedButtonText } from "../../components/RedButton";
import {
  HeadingWrap,
  MonsterText,
  SubHeading
} from "../../components/Headings";

const Description = styled.Text`
  color: #5f7195;
  font-size: 20px;
  line-height: 26px;
  font-family: "Grold-Regular";
  text-align: center;
`;

export default function MainScreen({ navigation }) {
  return (
    <ViewContainer>
      <ContentContainer>
        <HeadingWrap>
          <SubHeading>Hi Clara!</SubHeading>
        </HeadingWrap>
        <Description>
          {`Deine Elefantenklasse ist bereit zum starten! 
          Lade als nächstes deine Mitglieder ein:`}
        </Description>
        <RedButton onPress={() => navigation.navigate("LoginNavigator")}>
          <RedButtonText>EINLADEN</RedButtonText>
        </RedButton>
      </ContentContainer>
    </ViewContainer>
  );
}
