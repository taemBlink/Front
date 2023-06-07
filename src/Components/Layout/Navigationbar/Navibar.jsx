import React from "react";
import styled from "styled-components";

function Navibar({ setKeywords }) {
  return (
    <NavContainer>
      <NavLink onClick={() => setKeywords("")}>채용 전체</NavLink>
      <NavLink onClick={() => setKeywords("엔지니어링")}>엔지니어링</NavLink>
      <NavLink onClick={() => setKeywords("교육")}>교육</NavLink>
      <NavLink onClick={() => setKeywords("개발")}>개발</NavLink>
      <NavLink onClick={() => setKeywords("HR·경영지원")}>HR·경영지원</NavLink>
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
  cursor: pointer;

  &:hover {
    color: #282828;
  }
`;
