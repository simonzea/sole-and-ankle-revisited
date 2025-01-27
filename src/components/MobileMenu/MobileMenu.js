/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, QUERIES } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content aria-label='Sales menu'>
      <ModalMenuButton onClick={onDismiss}>
        <Icon id="close" strokeWidth={2} color={COLORS.gray[900]}></Icon>
        <VisuallyHidden>Dismiss modal</VisuallyHidden>
      </ModalMenuButton>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  display: none;
  background: hsl(220deg 5% 40% / 0.8);
  inset: 0;

  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`;

const Content = styled(DialogContent)`
  background: ${COLORS.white};
  padding: 26px 16px 32px 16px;
  position: fixed;
  top: 0;
  right: 0;
  flex:1;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: min(80dvw, 300px);
  height: 100%;
  justify-content: space-between
`;

const ModalMenuButton = styled.button`
    background-color: white;
    border: 0;
    display: flex;
    margin-left: auto;
`;

const Footer = styled.footer`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;

    text-align: left;
    margin-right: auto;
    gap: 14px;
`;

const FooterLink = styled.a`
  font-family: Raleway;
  font-size: calc(14 /16)rem;
  font-weight: 500;
  color: ${COLORS.gray[700]};
  text-decoration: none;
`;

const Nav = styled.nav`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    margin-right: auto;
    gap: 22px;
`;

const NavLink = styled.a`
  font-family: Raleway;
  font-size: calc(18 / 16)rem;
  font-weight: 600;

  color: ${COLORS.gray[900]};
  text-decoration: none;
`;


export default MobileMenu;
