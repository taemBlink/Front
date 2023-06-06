import styled from "styled-components";

function Navibar() {
  return (
    <NavContainer>
      <NavLink href="#home">채용 전체</NavLink>
      <NavLink href="#link">엔지니어링</NavLink>
      <NavLink href="#link">교육</NavLink>
      <NavLink href="#link">디자인</NavLink>
      <NavLink href="#link">개발</NavLink>
    </NavContainer>
  );
}

export default Navibar;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding-left: 150px;
  padding-right: 150px;
  margin-bottom: 20px;
`;

const NavLink = styled.div`
  font-size: 15px;
  color: #94969b;
  &:hover {
    color: #282828;
  }
`;
