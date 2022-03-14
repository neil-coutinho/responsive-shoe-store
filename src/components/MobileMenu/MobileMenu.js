/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (

    <ModalOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <ModalContent>

        <ModalContentWrapper>
          <Dismiss onClick={onDismiss}>
            <Icon id="close" strokeWidth={1} />
            <VisuallyHidden>Dismiss</VisuallyHidden>
          </Dismiss>
          <FlexSpacer />
          <NavStyles>
            <NavItem href="/sale">Sale</NavItem>
            <NavItem href="/new">New&nbsp;Releases</NavItem>
            <NavItem href="/men">Men</NavItem>
            <NavItem href="/women">Women</NavItem>
            <NavItem href="/kids">Kids</NavItem>
            <NavItem href="/collections">Collections</NavItem>
          </NavStyles>
          <FooterStyles>
            <FooterNavItem href="/terms">Terms and Conditions</FooterNavItem>
            <FooterNavItem href="/privacy">Privacy Policy</FooterNavItem>
            <FooterNavItem href="/contact">Contact Us</FooterNavItem>
          </FooterStyles>
        </ModalContentWrapper>
      </ModalContent>
    </ModalOverlay>
     

  );
};


const ModalOverlay = styled(DialogOverlay) `
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: hsla(220deg, 5%, 40%, 0.8);
  display: flex;
  justify-content: flex-end;

`;


const ModalContent = styled(DialogContent) `
  background: #fff;
  display: flex;
 
`;

const ModalContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 300px;


`;
const NavStyles = styled.nav`
  display:flex;
  flex-direction:column;
  gap:16px;
`;

const NavItem = styled.a`
  text-decoration: none;
  text-transform:uppercase;
  color: ${({theme}) => theme.COLORS.gray[900] };
  font-size: 1.25rem;
`;

const FooterStyles = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  
`;

const FooterNavItem = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.COLORS.gray[700] }
`;


const FlexSpacer = styled.div`
 flex: 1;
`;

const Dismiss = styled(UnstyledButton)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 16px;

`



export default MobileMenu;
