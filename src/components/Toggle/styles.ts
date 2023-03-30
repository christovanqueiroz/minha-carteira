import { Switch, SwitchProps } from '@mui/material';
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
`;

export const ToggleSelector = styled(Switch).attrs<SwitchProps>(
    {color: 'secondary'})`
    margin: 0;
`;