import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">SaleSaleSale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">MenCollections</NavLink>
          <NavLink href="/women">WomenCollections</NavLink>
          <NavLink href="/kids">KidsCollections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MovileMenu>
          <Icon id="shopping-bag" strokeWidth={2} color={COLORS.gray[900]}/>
          <Icon id="search" strokeWidth={2} color={COLORS.gray[900]}/>
          <MovileMenuButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} color={COLORS.gray[900]}></Icon>
          </MovileMenuButton>
        </MovileMenu>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    1vw + 1rem,
    3rem
  );
  margin: 0px 48px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MovileMenu = styled.div`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: clamp(
      1rem,
      1.5dvw + 1rem,
      2rem
    );
  }
`;

const MovileMenuButton = styled.button`
    background-color: white;
    border: 0;
`;

export default Header;
