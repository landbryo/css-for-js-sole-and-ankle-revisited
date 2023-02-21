import React from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men's Clothing</NavLink>
          <NavLink href="/women">Women's Clothing</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <MobileIconsWrapper>
            <Icon id="shopping-bag" strokeWidth={2} size={24} />
            <Icon id="search" strokeWidth={2} size={24} />
            <MenuButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} size={24} />
            </MenuButton>
          </MobileIconsWrapper>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const MobileIconsWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletMax} {
    display: flex;
    gap: 32px;
    justify-content: flex-end;
  }

  @media ${QUERIES.phoneMax} {
    gap: 16px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media ${QUERIES.tabletMax} {
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.tabletMax} {
    padding: 16px 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.2rem, 7.1vw - 3rem, 3rem);
  margin: 0 48px;

  @media ${QUERIES.tabletMax} {
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
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  white-space: nowrap;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
