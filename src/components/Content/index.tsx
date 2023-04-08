import React from 'react';

type Props = {
    children?: React.ReactNode
};

import { Container } from './styles';

const Content: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    );
}

export default Content;