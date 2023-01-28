import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.header`
   {
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background: #3c4240;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const NavLinkStyle = styled(NavLink)`
  margin-right: 12px;
  margin-left: 12px;
  padding: 10px;

  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;

  :hover {
    text-shadow: 0 0 10px #fff, 0 0 20px #56c8ea, 0 0 30px #56c8ea;
  }

  &.active {
    color: #56c8ea;
  }
`;
