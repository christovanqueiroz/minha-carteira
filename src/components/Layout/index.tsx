import React from 'react';
type Props = {
    children?: React.ReactNode
};

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Grid>
            <MainHeader/>
            <Aside />
            <Content>
                { children }
            </Content>
        </Grid>
    );
}

export default Layout;