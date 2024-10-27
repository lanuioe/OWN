import styled from "styled-components";
import { colors } from "../styles";
import vwCalc from "../util/vwCalc";

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${colors.mainOrange};
  color: ${colors.mainIvory};
  font-size: ${vwCalc(24)};
  align-items: center;
  justify-content: center;
`;

const NotFound = () => {
  return <Section>Page Not Found</Section>;
};

export default NotFound;
