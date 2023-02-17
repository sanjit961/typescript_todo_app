import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  :hover {
    text-decoration: underline;
    color: white;
  }
`;
const StyedNav = styled.nav``;
function NavMenu() {
  return (
    <>
      <nav className="navMenu">
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/blogs">Blogs</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
          <li>
            <StyledLink to="/login">Sigin</StyledLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
