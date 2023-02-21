/* eslint-disable no-unused-vars */
import React from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";
import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content ariaLabel="Mobile Menu">
        <DismissButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2} size={24} />
        </DismissButton>
        <Nav>
          <a href="/sale" className="active">
            Sale
          </a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const DismissButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-weight: var(--weight-medium);
  gap: 22px;
  text-transform: uppercase;

  a {
    color: var(--color-gray-900);
    text-decoration: none;
  }

  .active {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  a {
    color: var(--color-gray-700);
    text-decoration: none;
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: white;
  display: flex;
  flex-direction: column;
  font-size: ${18 / 16}rem;
  justify-content: space-between;
  max-width: 300px;
  padding: 32px;
  position: relative;
  height: 100%;
  width: 100%;
`;

export default MobileMenu;
