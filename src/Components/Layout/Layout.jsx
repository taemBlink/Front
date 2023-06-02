import styled from "styled-components";
import Header from "./Headers/Header";
import Blinkhub from "./Blinkhub/Blinkhub";
import Body from "./Bodies/Body";
import Footer from "./Footers/Footer";

function Layout({ children }) {
  return (
    <StLayoutBox>
      <Blinkhub />
      <StMain>
        <Header />
        <Body className="content">{children}</Body>
        <Footer />
      </StMain>
    </StLayoutBox>
  );
}

export default Layout;

const StLayoutBox = styled.div`
  min-width: 800px;
  margin: 0 auto;
`;

const StMain = styled.main`
  margin-top: 40px;
`;
