import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <div>
      <NavBox>
        <ul>
          <li>FIRST</li>
          <li>SECOND</li>
          <li>THIRD</li>
        </ul>
      </NavBox>
    </div>
  );
};

const NavBox = styled.div`
  position: fixed;
  width: 100%;
  height: 10rem;
  line-height: 10rem;
  li {
    float: left;
    margin-left: 5rem;
    font-size: 2rem;
    font-weight: 800;
    color: #3452be;
  }
`;

export default NavBar;
