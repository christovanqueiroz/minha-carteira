import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';


import { Container } from './styles';

const Dashboard: React.FC = () => {
    const options = [
        {value: 'Christovan', label: 'Christovan'},
        {value: 'João', label: 'João'},
        {value: 'Maria', label: 'Maria'}
    ]

    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor='#FFF'>
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;