import styled from "styled-components";

function Layout({ children }) {
    return (
      <StLayoutBox>
        <Header />
        <div className="content">{children}</div>
      </StLayoutBox>
    );
  }
  
  export default Layout;
  
  const StLayoutBox = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
  `;