import styled from "styled-components";

interface HBoxProps {
  readonly justify?: "start" | "center" | "end";
}

const HBox = styled.div<HBoxProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || "start"};
  height: 100%;
`;

export default HBox;
