import styled from "styled-components/native";

const ContentContainer = styled.View`
  flex: 1;
  margin-top: 30px;
  margin-right: 30px;
  margin-bottom: ${props => (props.isKeyboard ? "0" : "30")}px;
  margin-left: 30px;
  align-items: center;
  justify-content: space-around;
`;

export default ContentContainer;
