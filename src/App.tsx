import React from 'react';

type Props = {
    children?: React.ReactNode
};

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes'

import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}

export default App;