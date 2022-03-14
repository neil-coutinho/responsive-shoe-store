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

        <div>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={1} />
            <VisuallyHidden>Dismiss</VisuallyHidden>
          </UnstyledButton>

          <nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </nav>
          <footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </footer>
        </div>
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
  flex-direction: column;
`;


export default MobileMenu;
