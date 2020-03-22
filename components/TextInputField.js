import styled from "styled-components/native";

export default TextInputField = styled.TextInput`
  height: 60px;
  width: 100%;
  background-color: transparent;
  font-family: "Grold-Bold";
  text-align: center;
  font-size: 34px;
  text-align: center;

  border-bottom-width: 2px;
  border-bottom-color: ${props => (props.filled ? "#5F7195" : "#5F7195")};
  padding-bottom: 14px;

  position: relative;
`;
