import styled from "styled-components";
import Header from "./Headers/Header";
import Blinkhub from "./Blinkhub/Blinkhub";
import Body from "./Bodies/Body";
import Footer from "./Footers/Footer";
import Navibar from "./Navigationbar/Navibar";
function Layout({ children }) {
  return (
    <StLayoutBox>
      <main>
        <Blinkhub />
        <Header />
        <Navibar />
        <Body className="content">{children}</Body>
        <Footer />
      </main>
    </StLayoutBox>
  );
}

export default Layout;

const StLayoutBox = styled.div`
  min-width: 800px;
  margin: 0 auto;
`;
