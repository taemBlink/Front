import React from "react";
import styled from "styled-components";

function Navibar({ onFilterByKeyword }) {
  const handleNavClick = (keyword) => {
    onFilterByKeyword(keyword);
  };

  return (
    <NavContainer>
      <NavLink onClick={() => handleNavClick("")}>채용 전체</NavLink>
      <NavLink onClick={() => handleNavClick("엔지니어링")}>엔지니어링</NavLink>
      <NavLink onClick={() => handleNavClick("교육")}>교육</NavLink>
      <NavLink onClick={() => handleNavClick("개발")}>개발</NavLink>
      <NavLink onClick={() => handleNavClick("HR·경영지원")}>
        HR·경영지원
      </NavLink>
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
