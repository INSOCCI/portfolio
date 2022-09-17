import React from "react";
import styled from "styled-components";

const NavBar = ({ scrollIndex }) => {
  return (
    <NavBox>
      <ul>
        <Nav style={{ color: scrollIndex === 1 ? "white" : "#3452BE" }}>
          FIRST
        </Nav>
        <Nav style={{ color: scrollIndex === 2 ? "white" : "#3452BE" }}>
          SECOND
        </Nav>
        <Nav style={{ color: scrollIndex === 3 ? "white" : "#3452BE" }}>
          THIRD
        </Nav>
      </ul>
    </NavBox>
  );
};

const NavBox = styled.div`
  position: fixed;
  width: 100%;
  height: 12rem;
  line-height: 12rem;
`;
const Nav = styled.li`
  float: left;
  margin-left: 5rem;
  font-size: 2rem;
  font-weight: 800;
`;

export default NavBar;
