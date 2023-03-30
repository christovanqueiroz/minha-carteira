import React from 'react';

import LogoImg from '../../assets/logo.svg'

import {
    Container,
    Header,
    LogoImg,
    MenuContainer,
    MenuItemLink,
} from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={} alt="Logo Minha Carteira" />
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    Dashboard
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;