import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  background-image: linear-gradient(lavenderblush, lavender);
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    padding: 0;

    li {
      display: inline;
      padding: 0 1em 1em 0;
    }
  }
`;

const activeClassName = 'active';

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: mediumpurple;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.5s ease-out;

  &:hover {
    border-color: inherit;
  }

  &.${activeClassName} {
    color: purple;
  }
`;

export default () => (
  <Nav>
    <ul>
      <li>
        <StyledNavLink exact to="/">
          Home
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink exact to="/cat">
          Cat
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink exact to="/dog">
          Dog
        </StyledNavLink>
      </li>
    </ul>
  </Nav>
);
