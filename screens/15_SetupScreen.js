import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import ViewContainer from "../components/ViewContainer";
import ContentContainer from "../components/ContentContainer";
import { Button, ButtonText } from "../components/Button";
import TextInputField from "../components/TextInputField";

const TopText = styled.Text`
  align-self: flex-start;
  text-align: center;
  color: #5f7195;
  font-size: 20px;
  font-family: "Grold-Regular";
  line-height: 26px;
  width: 100%;
  margin-top: 20px;
`;

const DescriptionWrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Description = styled.Text`
  color: #5f7195;
  font-size: 20px;
  line-height: 26px;
  font-family: "Grold-Regular";
  text-align: center;
`;

export default function SetupScreen({ navigation }) {
  const [name, setName] = useState("");

  return (
    <ViewContainer>
      <ContentContainer>
        <TopText>Sag etwas über dich</TopText>
        <DescriptionWrap>
          <Description>Mein Name ist</Description>
          <TextInputField
            placeholder={`dein Name`}
            placeholderTextColor="#c67a77"
            value={name}
            onChangeText={name => setName(name)}
            maxLength={30}
            underlineColorAndroid="transparent"
            filled={name.length > 0}
            blurOnSubmit={false}
            returnKeyType="next"
          />
          <Description>
            und ich gehe in die Elefantenklasse an der Max- Schmeling Grund-
            schule in Berlin
          </Description>
        </DescriptionWrap>
        <Button onPress={() => navigation.navigate("MainNavigator")}>
          <ButtonText>WEITER</ButtonText>
        </Button>
      </ContentContainer>
    </ViewContainer>
  );
}
